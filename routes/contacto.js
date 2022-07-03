var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res,next){
    res.render('contacto',{
        isContacto:true
    }); //view/nosotros.hbs
})

router.post('/', async function(req,res,next){
    console.log(req.body)

    //capturar los datos es lo que estoy haciendo con estas variables
    var nombre = req.body.nombre; //trae el nombre que completo el cliente
    var email = req.body.email; //trae el mail del cliente
    var comentarios = req.body.comentarios; //trae el comentario que envio el cliente
    //console.log(req.body.nombre)

    var obj = {
        to:'onetowerconstrucciones@gmail.com',
        subject:'Contacto desde la pagina web',
        html:nombre + " se contacto a traves de la web y quiere saber mas info a este correo: " + email + ". Su comentario es: "+ comentarios + "."
    }

     var transport = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
     })  //finaliza el transport   

     var info = await transport.sendMail(obj);

     res.render('contacto',{
        message: 'Mensaje enviado correctamente'
     })

}) //finaliza router.post



module.exports = router;