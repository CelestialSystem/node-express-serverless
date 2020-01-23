const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());

process
  .on("unhandledRejection", (error, rejectedPromise) => {
    console.error("Unhandled Promise: ", rejectedPromise);
    console.error("Unhandled Promise error: ", error);
  })
  .on("uncaughtException", error => {
    console.error("Uncaught Exception thrown error: ", error);
    process.exit(1);
  });

app.get("/api/hello", (req, res) => {
    res.send({message: "Hello World!"});
});

app.get("/api/get-value/:index", async (req, res) => {
    const {index} = req.params;
    console.log("index: ", index);
    const fibonacciValue = await fibonacci(index);
    res.send({message: `Fibonacci value: ${fibonacciValue}`});
});

function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }

app.listen(3010, () => {
  console.info(
    `Serverless Application is running on listening on port: 3010`
  );
});

//AWS Lambda handler
module.exports.handler = serverless(app);