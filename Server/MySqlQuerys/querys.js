const { ConnectedMySql } = require("../mysql_connection");
let conexion;
class QUERYS {
  constructor() {
    let conexion = ConnectedMySql();
    console.log("CONEXION");
    this.conexion = conexion;
  }

  CreateTableUsuarios() {
    let consulta = "CREATE TABLE Usuarios (id_usuario int auto_increment, nombre varchar(20), password varchar(10), PRIMARY KEY (id_usuario))"
    console.log("-----> CreateTableUsuarios")

    console.log(consulta);
    conexion.connect((err) => {
      if (err)
        throw err

      conexion.query(consulta, (err, result) => {
        if (err) {
          console.log("/***********ERROR************/")
          console.log("querys.js function CreateTableUsuario");
          console.log(err);
          return err;
        }
        console.log("//Result(Open)")
        console.log(result);
        console.log("//Result(Close)")
        return result;
      });
    })

  }

  async CreateTableLuz() {
    let consulta = "CREATE TABLE Luces (id_luz int AUTO_INCREMENT, nombre varchar(20), status boolean, PRIMARY KEY (id_luz))"
    console.log("-----> CreateTableLuz")
    console.log(consulta);
    return conexion.query(consulta, async (err, result) => {
      if (err) {
        console.log("/***********ERROR************/")
        console.log("querys.js function CreateTableLuz");
        console.log(err);
        return err;
      }
      console.log("//Result(Open)")
      console.log(result);
      console.log("//Result(Close)")
      return await result;
    });
  }

  async CreateTableReference() {
    let consulta = "CREATE TABLE Referencias(id_relacion int auto_increment, id_usuario_fk int not null, id_luz_fk int not null, foreign key (id_usuario_fk) references Usuarios(id_usuario), foreign key (id_luz_fk) references luces(id_luz), primary key (id_relacion))"
    console.log("-----> CreateTableReference")
    console.log(consulta);
    return conexion.query(consulta, async (err, result) => {
      if (err) {
        console.log("/***********ERROR************/")
        console.log("querys.js function CreateTableReference");
        console.log(err);
        return err;
      }
      console.log("//Result(Open)")
      console.log(result);
      console.log("//Result(Close)")
      return await result;
    });
  }
  async CreateAllTables() {
    console.log("----> Drop All")
    CreateTableUsuarios();
    CreateTableLuz();
    CreateTableReference();
  }
  async DropTableUsuarios() {
    let consulta = "Drop table usuarios;"
    console.log("-----> DropTableUsuarios")
    console.log(consulta);
    return conexion.query(consulta, async (err, result) => {
      if (err) {
        console.log("/***********ERROR************/")
        console.log("querys.js function DropTableUsuarios");
        console.log(err);
        return err;
      }
      console.log("//Result(Open)")
      console.log(result);
      console.log("//Result(Close)")
      return await result;
    });
  }
  async DropTableLuces() {
    let consulta = "Drop table Luces;"
    console.log("-----> DropTableLuces")
    console.log(consulta);
    return conexion.query(consulta, async (err, result) => {
      if (err) {
        console.log("/***********ERROR************/")
        console.log("querys.js function DropTableLuces");
        console.log(err);
        return err;
      }
      console.log("//Result(Open)")
      console.log(result);
      console.log("//Result(Close)")
      return await result;
    });
  }

  async DropAllTables() {
    let consulta = "Drop table Usarios; Drop table Luces; Drop table Referencias; "
    console.log("-----> DropAllTables")
    console.log(consulta);
    return conexion.query(consulta, async (err, result) => {
      if (err) {
        console.log("/***********ERROR************/")
        console.log("querys.js function DropAllTables");
        console.log(err);
        return err;
      }
      console.log("//Result(Open)")
      console.log(result);
      console.log("//Result(Close)")
      return await result;
    });
  }

  async CrearUsuario(nombre, password) {
    let consulta = "Insert into Usuarios values(,\"" + nombre + "\",\"" + password + "\")";
    console.log("-----> CrearUsuario")
    console.log(consulta);
    return conexion.query(consulta, async (err, result) => {
      if (err) {
        console.log("/***********ERROR************/")
        console.log("querys.js function CrearUsuario");
        console.log(err);
        return err;
      }
      console.log("//Result(Open)")
      console.log(result);
      console.log("//Result(Close)")
      return await result;
    });
  }

  async CrearLuz(nombre, status) {
    let consulta = "Insert into Luces values(,\"" + nombre + "\"," + status + ")";
    console.log("-----> CrearLuz")
    console.log(consulta);
    return conexion.query(consulta, async (err, result) => {
      if (err) {
        console.log("/***********ERROR************/")
        console.log("querys.js function CrearLuz");
        console.log(err);
        return err;
      }
      console.log("//Result(Open)")
      console.log(result);
      console.log("//Result(Close)")
      return await result;
    });
  }

  async CrearReferencia(id_usuario, id_luz) {
    let consulta = "Insert into Luces values(," + id_usuario + "," + id_luz + ")";
    console.log("-----> CrearReferencia")
    console.log(consulta);
    return conexion.query(consulta, async (err, result) => {
      if (err) {
        console.log("/***********ERROR************/")
        console.log("querys.js function CrearReferencia");
        console.log(err);
        return err;
      }
      console.log("//Result(Open)")
      console.log(result);
      console.log("//Result(Close)")
      return await result;
    });
  }

  async CambiarStatusLuz(id, status) {
    let consulta = "update Luces set status=" + status + " where id = " + id + ";";
    console.log("-----> CambiarStatusLuz")
    console.log(consulta);
    return conexion.query(consulta, async (err, result) => {
      if (err) {
        console.log("/***********ERROR************/")
        console.log("querys.js function CambiarStatusLuz");
        console.log(err);
        return err;
      }
      console.log("//Result(Open)")
      console.log(result);
      console.log("//Result(Close)")
      return await result;
    });
  }

  async GetLuces() {
    let consulta = "select * from Luces;";
    console.log("-----> GetLuces")
    console.log(consulta);
    return conexion.query(consulta, async (err, result) => {
      if (err) {
        console.log("/***********ERROR************/")
        console.log("querys.js function GetLuces");
        console.log(err);
        return err;
      }
      console.log("//Result(Open)")
      console.log(result);
      console.log("//Result(Close)")
      return await result;
    });
  }
}


module.exports = QUERYS;