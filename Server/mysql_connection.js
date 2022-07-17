var mysql = require('mysql');
async function ConnectedMySql()
{
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "control"
})
 await con.connect((err) => {
   if(err)
   {
        console.log("database no conectada");
   }

    console.log("Mysql Connected");
})
// console.log("CONEXION CONNECTED");
// console.log(con);
return con;
}

module.exports = {ConnectedMySql};