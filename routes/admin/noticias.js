var express = require('express');
var router = express.Router();
var noticiasModel = require('../../models/noticiasModel');

//diseño y listado de noticias//
router.get('/', async function(req, res,next){
    var noticias = await noticiasModel.getNoticias();

    res.render('admin/noticias',{
        layout:'admin/layout', 
        persona:req.session.nombre, noticias 
    }); // view/admin/noticias.hbs
}); //cierro get

// => o function (es lo mismo)
// esto sirve para mostrar el alta de las  noticias
router.get('/agregar',(req,res,next) =>{
    res.render('admin/agregar', { //agregar.hbs
        layout: 'admin/layout'
    })
})

module.exports = router;