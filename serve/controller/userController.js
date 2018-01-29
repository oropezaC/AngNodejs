const dataModel = require('../model/data');

let data = dataModel

function getData(req,res) {
  res.json(data)
}

function getDataId(req,res) {
  let id = req.params.id;
  let resultado = data.filter(item => item.id == id);
  res.json(resultado)
}


function saveUser(req,res) {
  let newUser = req.body;
  let id = data.length + 1
  newUser.id = id;
  data.push(newUser)
  res.json(newUser.id)
}

function deleteDataId(req,res) {
  let id = req.params.id;
  data = data.filter(item => item.id != id)
  data = data;
  res.json(data)
}

function updateUSer(req,res) {
  let user = req.body;
  data.forEach(function (data) {
    if (data.id == user.id) {
      data.nombre = user.nombre;
      data.edad = user.edad;
      data.hb = user.hb;
    }
  })
  res.json(user)
}

module.exports = {
  getData,
  getDataId,
  saveUser,
  deleteDataId,
  updateUSer
};
