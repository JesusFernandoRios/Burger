const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user:'root',
    password:'Wink26er!',
    database:'burgers_db'
})

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Wink26er!',
        database:'burgers_db'
    })
}
//////

//////

connection.connect(function(err){
    if(err) throw err;

    console.log("connected as id " + connection.threadId);
})

//////

module.exports = connection;