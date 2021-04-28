import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { employee } from './employee'
@Injectable({
  providedIn: 'root'
})
//?userid=Arin123&&password=Arin123
export class EmployeeService {
  url='http://localhost:3000/employee';
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<any> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.get<any>(this.url, httpOptions);  
  }
  addEmployee(employee: employee): Observable<any> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<any>(this.url ,  
      employee, httpOptions);  
  } 
  getEmployeeById(id: number): Observable<any> {  
    return this.http.get<any>(this.url + '/' + id);  
  }
  updateEmployee(id:number,employee: any): Observable<any> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<any>(`${this.url}/${id}`,employee, httpOptions);  
  } 
  deletedEmployeeById(id: number): Observable<any> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/' +id,  
 httpOptions);  
  }  
  checkEmployee(employee:any): Observable<any> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.get<any>(`${this.url}?name=${employee.name}&password=${employee.password}`, httpOptions);  
  }
  checkUsername(employee:any): Observable<any> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.get<any>(`${this.url}?id=${employee.id}&name=${employee.name}`, httpOptions);  
  }
  updatepassword(employee: any): Observable<any> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<any>(`${this.url}/${employee.id}`,employee, httpOptions);  
  }
}
