var pool = require('./bd');
var md5 = require('md5');
// son parametros cuando los datos estan entre los parentesis. (user,password)
async function getUserAndPassword(user,password){
    try{ //el select busca un array de elementos, en este caso le indico con el limit 1 que traiga por cada usuario y contrasenia solo 1.
        var query = "select * from usuarios where usuario = ? and password = ? limit 1";
        var rows = await pool.query(query,[user, md5(password)]); //se pone entre corchetes xq voy a pasar mas de 1 dato, en este caso son 2 datos, usuario y contrasenia, es un array por ende va entre corchetes. el md5 es porque manda encriptada el password.
        return rows[0]; //con el limit 1 y el [0]me aseguro que si alguien creo 20 usuarios con el nombre flavia voy a traer solo 1
    }catch (error) {
    console.log(error);
    }

}
//x que existe la posibilidad de que uno genere varios elementos entre {van a ir los nombres de las funsiones} en este caso getUserAndPassword. Si tengo mas de una funsion se separan con ,
module.exports = { getUserAndPassword }

//try - catch : Ayuda con el manejo de errores, es decir cuando no encuentre algo va a avisar a traves de la consola (console.log) lo que no encuentra o no entiende. 