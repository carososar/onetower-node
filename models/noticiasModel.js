var pool = require('./bd');

async function getNoticias(){
    var query = 'select * from noticias'; //si quiero puedo escribir una orden despues de noticias por ej order by id DESC y ordena las noticias del id mayor al menor, tambien puedo decirle limit 2 y trae solo 2 noticias. en mi caso le pedi que me traiga todas las noticias.//
    var rows = await pool.query(query);
    return rows;
}

async function insertNoticias(obj){
    try{
        var query = 'insert into noticias set ?';
        var rows = await pool.query(query,[obj]);
        return rows;

    }catch(error){
        console.log(error);
        throw error;
    }
}


async function deleteNoticiaByID(id){
    var query = 'delete from noticias where id= ?';
    var rows = await pool.query(query,[id]);
    return rows;
}

async function getNoticiasByID(id){
    var query = 'select * from noticias where id= ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarNoticiaByID(obj,id){
    try{
        var query = 'update noticias set ? where id=?'
        var rows = await pool.query(query,[obj, id]);
        return rows;
    }catch(error){
        throw error;
    }
}


module.exports = { getNoticias, insertNoticias, deleteNoticiaByID, getNoticiasByID, modificarNoticiaByID }