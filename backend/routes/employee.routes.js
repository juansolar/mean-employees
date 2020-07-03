const express = require('express');
const { model } = require('mongoose');
const router = express.Router(); //objeto el cual le agregamos propiedades (rutas) para luega exportarlo

const employeeCtrl = require('../Controllers/employee.controller');

router.get('/', employeeCtrl.getEmployees);
router.post('/', employeeCtrl.createEmployee);
router.get('/:id', employeeCtrl.getEmployee);
router.put('/:id', employeeCtrl.editEmployee);
router.delete('/:id', employeeCtrl.deleteEmployee);

module.exports = router;