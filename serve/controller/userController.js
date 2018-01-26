module.exports = {
  getData,
  getDataId,
  saveUser
};


function getData(req,res) {
  res.json(data)
}

function getDataId(req,res) {
  let id = req.params.id;
  let resultado = data.filter(item => item.id == id);
  res.json(resultado)
}


function saveUser(req,res) {
  console.log(req.body);
}
let data = [
  {id: 1, nombre:'Yahir Oropeza',departamento:'Desarrollo Web',edad:28,exp:'2 años',hb:'React.js and Node.js'},
  {id: 2, nombre:'Angel Cordero',departamento:'Desarrollo Web',edad:23,exp:'1 año',hb:'php'},
  {id: 3, nombre:'Karen Ramirez',departamento:'Documentacion',edad:21,exp:'1 año',hb:'Docuemntery'},

]
