import mysql from 'mysql';

var conectar = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sql2022*',
    database: 'estudiantes_tarea2'
});

conectar.connect(function(err) {
    if (err) {
        console.log("Error en la conexion:"+err.stack);
        return;
    } else {
        console.log('Conexion Exitosa ID: ' + conectar.threadId);
    }
});
export {conectar};