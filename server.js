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

// Using a single function to handle multiple signals
function handle(signal) {
  console.log(`Received ${signal}`);
}

process.on("SIGINT", () => {
  console.log(`exited as signal SIGINT`);
  process.exit(0);
});
process.on("SIGTERM", handle);
process.on("exit", handle);

require("./modules/sample")(app);
require("./modules/user")(app);

app.listen(3010, () => {
  console.info(
    `Serverless Application is running on listening on port: 3010`
  );
});

//AWS Lambda handler
module.exports.handler = serverless(app);