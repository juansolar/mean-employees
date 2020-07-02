const employeeCtrl = {};

employeeCtrl.getEmployee = (req, res) =>{
    res.json({
        status : 'get employee'
    });
}

employeeCtrl.createEmployee = function(){

}

module.exports = employeeCtrl;