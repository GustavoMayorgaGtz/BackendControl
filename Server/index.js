const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const conexion = require('./conexion.js');
const mysqlConnection = require("./mysql_connection");
const LightsRute = require("./Rutes/LuzRutel");
require('dotenv').config();
conexion();
mysqlConnection();
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use("/Lights", LightsRute);

/****Log*****/
var fs = require('fs'); var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/node.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
 log_file.write(util.format(d) + '\n');
 log_stdout.write(util.format(d) + '\n');
};
/*********/
app.listen(3000, ()=>{
    console.log("Servidor works!")
})