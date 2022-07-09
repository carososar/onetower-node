var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel'); //aca estamos incluyendo el archivo usuariosModel y vamos a generar otra variable, var data

router.get('/', function(req, res,next){
    res.render('admin/login',{
        layout:'admin/layout' //admin/layout.hbs
    }); // view/admin/login.hbs
}); //cierro get

router.post('/', async function(req,res,next){

    try{  //aca estamos capturando los datos y necesitamos que de algun modo se conecte con el archivo usuariosModel, para poder pasarle los datos a la funsion que creamos en usuariosModel, entonces lo que vamos a hacer despues de crear las dos var...usuario y password, tenemos que incluir el archivo. entonces vamos a ir a arriba y debajo de var router.
        console.log(req.body);
        var usuario = req.body.usuario; //PASO 1 flavia
        var password = req.body.password; //PASO 2 1234 

        var data = await usuariosModel.getUserAndPassword(usuario,password); //PASO 3 se conecta con el nombre de la variable, busca el usuarioModel y adentro esta buscando la funcion, entonces adentro de los parentesis le vamos a pasar como parametros lo que se guardo en usuario y password

        if(data != undefined){
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;

            res.redirect('/admin/nosotros') //le vamos a decir que si los datos son correctos, en este caso esta comparando los datos que estan en var data te da acceso y pasas a nosotros.
        } else{
            res.render('admin/login',{ //es el login.hbs
                layout:'admin/layout',
                error:true
            })
       }
   }catch(error){
       console.log(error)
    }



}) //cierro post


module.exports = router;

//el login.js es el que va a procesar. cuando reciba...desde el formulario a traves del metodo POST, va a almacenar los datos que llegan para despues chequear si son o no iguales a la query (o sea son los mismos datos que estan guardados en la base de datos?) 

router.post('/', async function(req,res,next){

    try{  //aca estamos capturando los datos y necesitamos que de algun modo se conecte con el archivo usuariosModel, para poder pasarle los datos a la funsion que creamos en usuariosModel, entonces lo que vamos a hacer despues de crear las dos var...usuario y password, tenemos que incluir el archivo. entonces vamos a ir a arriba y debajo de var router.
        console.log(req.body);
        var usuario = req.body.usuario; //PASO 1 flavia
        var password = req.body.password; //PASO 2 1234 

        var data = await usuariosModel.getUserAndPassword(usuario,password); //PASO 3 se conecta con el nombre de la variable, busca el usuarioModel y adentro esta buscando la funcion, entonces adentro de los parentesis le vamos a pasar como parametros lo que se guardo en usuario y password

        if(data != undefined){
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;

            res.redirect('/admin/nosotros') //le vamos a decir que si los datos son correctos, en este caso esta comparando los datos que estan en var data te da acceso y pasas a nosotros.
        } else{
            res.render('admin/login',{ //es el login.hbs
                layout:'admin/layout',
                error:true
            })
       }
   }catch(error){
       console.log(error)
    }



}) //cierro post
