const connection = require('./connection.js')


let orm = {

    selectAll: function(cb) {

        connection.query('SELECT * FROM burgers',(err, result) => {
          if (err) throw err;
          cb(result);
        });
    },

    insertOne: function(burger_name, cb) {

        connection.query('INSERT INTO burgers SET ?', {	burger_name: burger_name, devoured: false,},(err, result) => {
				if (err) throw err;
				callback(result);
			});
    },

    updateOne: function(burger_id,cb) {
        
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}],(err, result) => {
				if (err) throw err;
				callback(result);
			});
    }
};

module.exports = orm;