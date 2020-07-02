const express = require('express');
const { model } = require('mongoose');
const router = express.Router(); //objeto el cual le agregamos propiedades (rutas) para luega exportarlo

const employeeCtrl = require('../Controllers/employee.controller');

router.get('/', employeeCtrl.getEmployee);


module.exports = router;