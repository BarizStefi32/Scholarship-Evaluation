import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../interfaces/Employee';
import { employeeModel } from '../models/employeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  readonly baseUrl = 'https://localhost:44389';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(
      this.baseUrl + `/employees`,
      this.httpOptions
    );
  }

  getEmployee(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(this.baseUrl + `/employee/` + id);
  }

  addEmployee(
    employee: employeeModel
  ): Observable<Employee[]> {
    return this.httpClient.post<Employee[]>(this.baseUrl + `/employee`, employee);
  }

  deleteEmployee(id: string) {
    return this.httpClient.delete(this.baseUrl + `/employee/` + id);
  }

  editEmployee(
    employee: Employee
  ): Observable<Employee> {
    return this.httpClient.put<Employee>(this.baseUrl + `/employee/` + employee.id, employee);
  }
}
