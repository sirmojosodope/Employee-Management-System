const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "employees"
});

connection.connect(function(err){
    if(err) throw err;
});

module.exports = connection;

