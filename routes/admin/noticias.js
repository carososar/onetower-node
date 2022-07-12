var express = require('express');
var router = express.Router();
var noticiasModel = require('../../models/noticiasModel');


router.get('/', async function(req, res,next){
    var noticias = await noticiasModel.getNoticias();

    res.render('admin/noticias',{
        layout:'admin/layout', 
        persona:req.session.nombre, noticias 
    }); // view/admin/noticias.hbs
}); //cierro get



module.exports = router;