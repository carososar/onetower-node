var pool = require('./bd');

async function getNoticias(){
    var query = 'select * from noticias'; //si quiero puedo escribir una orden despues de noticias por ej order by id DESC y ordena las noticias del id mayor al menor, tambien puedo decirle limit 2 y trae solo 2 noticias. en mi caso le pedi que me traiga todas las noticias.//
    var rows = await pool.query(query);
    return rows;
}


module.exports = { getNoticias }