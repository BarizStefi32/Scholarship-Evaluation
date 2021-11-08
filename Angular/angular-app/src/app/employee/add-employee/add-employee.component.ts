import { EmployeeApiService } from './../employee-api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  showFirstNameError: boolean = false;
  showLastNameError: boolean = false;
  showCityError: boolean = false;

  form = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    phoneNumber: new FormControl("", Validators.required),
    role: new FormControl("", Validators.required)
  });

  constructor(private employeeService: EmployeeApiService, private router: Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

    this.form.controls.firstName.valueChanges.subscribe((firstName) => {
      if (firstName.length < 3) {
        this.showFirstNameError = true;
      } else {
        this.showFirstNameError = false;
      }
    })


    this.form.controls.lastName.valueChanges.subscribe((lastName) => {
      if (lastName.length < 3) {
        this.showLastNameError = true;
      } else {
        this.showLastNameError = false;
      }
    })

    this.form.controls.city.valueChanges.subscribe((city) => {
      if (city.length < 3) {
        this.showCityError = true;
      } else {
        this.showCityError = false;
      }
    })


  }


  addEmployee(): void {
    this.employeeService.addEmployee(this.form.value).subscribe(() => this.router.navigateByUrl(''));
  }

}
