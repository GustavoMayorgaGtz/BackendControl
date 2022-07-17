const QUERYS = require("../MySqlQuerys/querys");
const express = require("express");
const rute = express.Router();
let Querys = new QUERYS();

rute.get("/CreateTableUsuarios", (req, res) => {
   let response =  Querys.CreateTableUsuarios()
   res.send(response);
    
})
rute.get("/CreateTableLuz", (req, res) => {
   let response = Querys.CreateTableLuz()
   res.send(response);
})
rute.get("/CreateTableReference", (req, res) => {
   let response =   Querys.CreateTableReference()
   res.send(response);
   
})
rute.get("/CreateAllTables", (req, res) => {
    Querys.CreateAllTables()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.send(err)
    })
})
rute.get("/DropTableUsuarios", (req, res) => {
    Querys.DropTableUsuarios()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.send(err)
    })
})
rute.get("/DropTableLuces", (req, res) => {
    Querys.DropTableLuces()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.send(err)
    })
})
rute.get("/DropAllTables", (req, res) => {
    Querys.DropAllTables()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.send(err)
    })
})
module.exports = rute;