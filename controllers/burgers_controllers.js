const express = require('express');

const burger = require('../models/burger.js');

let router = express.Router();

//////

router.get('/', (req, res) => {
    burger.selectAll(function(data){
        let obj = {burgers: data};

        res.render('index', obj)
    })

})


//////

module.exports = router;