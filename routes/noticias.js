var express = require('express');
var router = express.Router();

router.get('/', function(req, res,next){
    res.render('noticias'); //view/noticias.hbs
})


module.exports = router;