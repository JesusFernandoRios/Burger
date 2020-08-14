const connection = require('./connection.js')


let orm = {

    selectAll: function(cb) {

        connection.query('SELECT * FROM burgers',(err, result) => {
          if (err) throw err;
          cb(result);
        });
    },

    insertOne: function(burger_name, cb) {

        connection.query('INSERT INTO burgers SET ?', [{burger_name: burger_name, devoured: false}],(err, result) => {
				if (err) throw err;
				cb(result);
			});
    },

    updateOne: function(burger_id,cb) {
        
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burger_id}],(err, result) => {
				if (err) throw err;
				cb(result);
			});
    }
};

module.exports = orm;