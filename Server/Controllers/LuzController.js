const Luz = require('../Models/Luz');

function CreateLight(user, name, status)
{
    const newLuz = new Luz({
        nombre: name,
        // usuario: user,
        status
    })

    return newLuz.save();
}

function ChangeState(user, id, status)
{
    return Luz.findOneAndUpdate({ _id: id},{
        status
    })
}

function GetLuz()
{
    return Luz.find();
}


module.exports = {CreateLight, ChangeState, GetLuz};