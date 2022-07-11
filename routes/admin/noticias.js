var express = require('express');
var router = express.Router();


router.get('/', function(req, res,next){
    res.render('admin/noticias',{
        layout:'admin/layout', 
        persona:req.session.nombre //Flavia
    }); // view/admin/nosotros.hbs
}); //cierro get



module.exports = router;