const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user:'root',
    password:'Wink26er!',
    database:'burgers_db'
})

connection.connect(function(err){
    if(err) throw err;

    console.log("connected as id " + connection.threadId);
})

module.exports = connection