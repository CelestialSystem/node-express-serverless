const userList = require("../../utils/mock");

function getUserList(req, res) {
    res.send({
        total_output: userList.length,
        output_date: userList
    })
}

module.exports = {
    getUserList
}