const orm = require('../config/orm.js');

let burger = {
    
    selectAll: function(cb){
        orm.selectAll(function(res){
          cb(res);
        });
      },
    
      insertOne: function(burger_name, cb){
        orm.insertOne(burger_name, function(res){
          cb(res);
        });
      },
    
      updateOne: function(burger_id, callback){
        orm.updateOne(burger_id, function(res){
          callback(res);
        });
      }

}

module.exports = burger;