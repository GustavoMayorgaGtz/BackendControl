const express = require('express');
const rute = express.Router()
const { CreateLight, ChangeState, GetLuz } = require('../Controllers/LuzController');

rute.post('/CreateLight', (req, res) => {
    let nombre = req.body.nombre;
    let usuario = req.body.usuario;
    let status = req.body.status;
    console.log(usuario);
    console.log(nombre);
    console.log(status);
    if (nombre  && status) {
        CreateLight(usuario, nombre, status)
            .then((data) => {
                console.log("rute /CreateLight says SUCCESS");
                if (data) {
                    res.status(200).send({ status: 200, message: data })
                } else {
                    console.log("rute /CreateLight says NODATA");
                    res.status(200).send({ status: 200, message: "nodata" })
                }

            })
            .catch((err) => {
                console.log("rute /CreateLight says ERROR");
                res.status(500).send({ status: 500, message: "Error: " + err });
            })
    } else {
        console.log("rute /CreateLight says  MISSING");
        res.status(400).send({ status: 400, message: "missing" });
    }

})

rute.post('/ChangeState', (req, res) => {
    let id = req.body.id;
    let usuario = req.body.usuario;
    let status = req.body.status;
    if (id  && status) {
        ChangeState(usuario, id, status)
            .then((data) => {
                console.log("rute /ChangeState says SUCCESS");
                if (data) {
                    res.status(200).send({ status: 200, message: data })
                } else {
                    console.log("rute /ChangeState says NODATA");
                    res.status(200).send({ status: 200, message: "nodata" })
                }

            })
            .catch((err) => {
                console.log("rute /ChangeState says ERROR");
                res.status(500).send({ status: 500, message: "Error: "+ err });
            })
    } else {
        console.log("rute /ChangeState says  MISSING");
        res.status(400).send({ status: 400, message: "missing" });
    }
})

rute.get('/GetLights', (req, res) => {
    GetLuz()
        .then((data) => {
        res.status(200).send({status: 200, message: data})
        })
        .catch((err) => {
            console.log("rute /GetLights says ERROR, err: "+err)
            res.status(200).send({status: 200, message: err})
        }) 

})

module.exports = rute;