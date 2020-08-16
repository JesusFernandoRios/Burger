const express = require('express');

const burger = require('../models/burger.js');

let router = express.Router();

//////

router.get('/', function (req, res) 
{
  res.redirect('/index');
});


router.get('/index', (req, res) => {
    burger.selectAll(function(data){
        let obj = {burgers: data};

        res.render('index', obj)

        console.log(obj)
    })
})

router.post('/burger/create', function (req, res) 
{
  burger.insertOne(req.body.burger_name, function() 
  {
    res.redirect('/index');
  });
});

router.post('/burger/eat/:id', (req, res) => {
  burger.updateOne(req.params.id,() => {

    res.redirect('/index');
  });
});


//////

module.exports = router;