var mysql = require('mysql');
let conexion;
function ConnectedMySql()
{
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "control"
})
con.connect((err) => {
   if(err)
        console.log("database no conectada");

    console.log("Mysql Connected");
})

return con;
}

module.exports = {ConnectedMySql};