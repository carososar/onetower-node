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

router.post('/agregar', async (req,res,next) =>{
        //console.log(req.body)
    try{
        if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "" && req.body.link != ""){
            await noticiasModel.insertNoticias(req.body);
            res.redirect('/admin/noticias')

        } else {
            res.render('admin/agregar',{
                layout:'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }

    }catch(error){
        console.log(error)
        res.render('admin/agregar',{
            layout:'admin/layout',
            error: true,
            message: 'No se carga la noticia'
        })
    }

})

//*eliminar la noticia*//
router.get('/eliminar/:id', async (req,res,next) =>{
    //console.log(req.params.id);
    var id = req.params.id;
    await noticiasModel.deleteNoticiaByID(id);
    res.redirect('/admin/noticias')
})

/*vista modificar (form) + los datos de los campos para poder modificar*/

router.get('/modificar/:id', async(req,res,next) =>{
    var id = req.params.id;
    var noticia = await noticiasModel.getNoticiasByID(id);
    res.render('admin/modificar',{
        layout:'admin/layout',
        noticia

    })
})
/*actualizacion de los datos*/

router.post('/modificar', async(req,res,next)=>{
    try{

        var obj = {
            titulo:req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            link: req.body.link
        }

        await noticiasModel.modificarNoticiaByID(obj, req.body.id);
        res.redirect('/admin/noticias');

    }catch(error){
        console.log(error)
        res.render('admin/modificar',{
            layout:'admin/layout',
            error: true,
            message: 'No se modifico la noticia'
        })
    }
})


module.exports = router;