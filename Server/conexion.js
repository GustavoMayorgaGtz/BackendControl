const mongoose = require('mongoose');

function _connectDB() {
    const URI =`mongodb://localhost:27017/HidroSensor`;
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    var connection = mongoose.connection;
        
    connection.on('connected', () => {
        console.log("connection done!");
    });
    connection.on('disconnected', () => {
        console.log("disconnected database");
    });
    connection.on("error", () => {
        console.log("error connection database");
    })
  

}
module.exports = _connectDB;