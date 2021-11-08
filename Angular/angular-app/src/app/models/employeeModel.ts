import { Employee } from "../interfaces/Employee";

export class employeeModel implements Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  city: string;
  phoneNumber: string;
  role: string;

  constructor(id: string, firstName: string, lastName: string, email: string, gender: string, city: string, phoneNumber: string, role: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.city = city;
    this.phoneNumber = phoneNumber;
    this.role = role;

  }

}
