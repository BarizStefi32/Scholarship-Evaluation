import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeeApiService } from '../employee-api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];
  employeeId: string = '';
  activeButton: string = '';

  constructor(private router: Router, private employeeService: EmployeeApiService) { }

  ngOnInit(): void {
    this.getEmployees();
  }


  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(() => this.getEmployees());
    this.employeeId = '';
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((result) => {
      this.employees = result;
    });
  }

  editEmployee(id: string) {
    this.employeeId = id;
  }

  sortAscending(): void {
    this.activeButton = 'ascending';
    this.employees = this.employees.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? - 1 : 0));
  }

  sortDescending(): void {
    this.activeButton = 'descending';
    this.employees = this.employees.sort((b, a) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? - 1 : 0));
  }
}

