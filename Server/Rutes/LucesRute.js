let ex = require('express')
const QUERYS = require("../MySqlQuerys/querys");
let Query = new QUERYS();
const rute = ex.Router();

rute.post("/CrearLuz", (req,res) => {
    let nombre = req.body.nombre;
    let status = req.body.status;

    if(nombre)
    {
        Query.CrearLuz(nombre, status)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        })
    }
})

rute.post("/CambiarEstadoLuz", (req,res) => {
    let id = req.body.id;
    let status = req.body.status;
    if(id)
    {
        Query.CambiarStatusLuz(id, status);
    }else{
        res.send("nodata");
    }
    
})

rute.get("/GetLuces", (req,res) => {
    Query.GetLuces(res);
})


module.exports = rute;