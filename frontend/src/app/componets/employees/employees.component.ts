import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService ) { }

  ngOnInit(): void {
    //funciones que se carga cuando se ejecuta la aplicacion
    this.getEmployees();
  }

  addEmployee(form?: NgForm){
    console.log(form.value._id);
    if(form.value._id){
      console.log("editar...");
      this.employeeService.putEmployee(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({html: "Update Succesfuly"});
        this.getEmployees();
      });
    }else{
      console.log("nuevo...");
      this.employeeService.postEmployee(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({html: "Save Succesfuly"});
        this.getEmployees();
      });
    }
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe( res => {
      this.employeeService.employees = res as Employee[];
      console.log(res);
    });
  }

  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
      
  }

}
