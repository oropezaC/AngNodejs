const express = require('express');
const router = express.Router();

const usuariosCtrl = require('../controller/userController')

router.route('/')
  .get(usuariosCtrl.getData)
  .post(usuariosCtrl.saveUser)
  .put(usuariosCtrl.updateUSer)

router.route('/:id')
  .get(usuariosCtrl.getDataId)
  .delete(usuariosCtrl.deleteDataId)


module.exports = router;
