import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeeApiService } from '../employee-api.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent {
  employeeIdExists: boolean = false;

  @Input() set employeeId(employeeId: string) {
    if (employeeId !== '') {
      this.employeeService.getEmployee(employeeId).subscribe((employee: Employee) => {
        this.form.patchValue(employee)
      })
      this.employeeIdExists = true;
    } else {
      this.employeeIdExists = false;
    }
  }

  @Output() userEdited: EventEmitter<void> = new EventEmitter<void>();

  form = new FormGroup({
    id: new FormControl(""),
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    phoneNumber: new FormControl("", Validators.required),
    role: new FormControl("", Validators.required)
  });

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeApiService) { }

  editEmployee() {
    this.employeeService.editEmployee(this.form.value).subscribe((result) => {
      this.userEdited.next();
      this.employeeIdExists = false;
    })
  }

}
