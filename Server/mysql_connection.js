var mysql = require('mysql');
function ConnectedMySql()
{
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "Control"
})
con.connect((err) => {
   if(err)
        throw err

    console.log("Mysql Connected");
    let consulta = "CREATE TABLE LUZ (Id int, name varchar(20), status varchar(10), PRIMARY KEY (Id))"
    con.query(consulta, (err, result) =>  {
        if (err) throw err;
        console.log(result);
      });
})
}

module.exports = ConnectedMySql;