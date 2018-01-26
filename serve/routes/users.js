const express = require('express');
const router = express.Router();

const usuariosCtrl = require('../controller/userController')

router.route('/')
  .get(usuariosCtrl.getData)
  .post(usuariosCtrl.saveUser)

router.route('/:id')
  .get(usuariosCtrl.getDataId)

module.exports = router;
