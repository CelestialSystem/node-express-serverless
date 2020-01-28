const userModel = require("./user-model");

module.exports = (app) => {
    app.get("/api/get-user-list", userModel.getUserList);
}