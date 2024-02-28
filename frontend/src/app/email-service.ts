import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class EmailService {
  private apiUrl = 'http://localhost:3001/user'
  // emails: {id?:number, name: string, email: string}[] = allUsers;

  constructor(private http: HttpClient) { }

  getList<T>(): Observable<T[]> {
    
    return this.http.get<T[]>(this.apiUrl);
    
  }

  // setEmail(name: string, email: string): Observable<any[]> {
    
  //   return this.http.post<any[]>(this.apiUrl, {name, email});
  // }

  // removeEmail(id: number): Observable<any[]> {
  //   return this.http.delete<any[]>(`${(this.apiUrl)}/${id}`);
  // }
}

//Observable
// Em outras palavras, o observable permite você fazer um subscribe em um método
//  ou função para que possa receber as suas modificações