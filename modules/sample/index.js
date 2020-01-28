const sampleModel = require("./sample-model");

module.exports = (app) => {
    app.get("/api/hello", sampleModel.hello);

    app.get("/api/get-value/:index", sampleModel.fib);
}