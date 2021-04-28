import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './user';

type NewType = Observable<any>;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='http://localhost:3000/user';
  constructor(private http: HttpClient) { }
  checkUser(user:user): Observable<any> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 
    return this.http.get<any>(`${this.url}?userid=${user.userid}&password=${user.password}`, httpOptions);  
  }
  checkUsername(userid:any): Observable<any> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.get<any>(`${this.url}?userid=${userid}`, httpOptions);  
  }
  addUser(user: user): Observable<any> {  
 
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<any>(this.url ,  
      user, httpOptions);  
  } 
updatepassword(user: any): Observable<any> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<any>(`${this.url}/${user.id}`,user, httpOptions);  
  } 
}
