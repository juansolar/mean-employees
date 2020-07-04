const Employee = require('../models/employee');
//const { restart } = require('nodemon');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) =>{
    const employees = await Employee.find(); //await en el caso de una busqueda muy grande
    res.json(employees);
};

employeeCtrl.createEmployee = async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.position,
        salary: req.body.salary 
    });
    await employee.save();
    res.json({
        status : "Employee saved"
    });
};


employeeCtrl.getEmployee = async (req,res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

employeeCtrl.editEmployee = async (req, res) => {
    const { id } = req.params;
    const employee ={
        name : req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true} ); //new true=> en el caso que no existe lo crea
    res.json({status: 'updated'});
};

employeeCtrl.deleteEmployee = async(req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'deleted'});
}


module.exports = employeeCtrl;