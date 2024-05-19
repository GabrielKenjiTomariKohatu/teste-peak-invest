import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getUserResponse } from '../entity/response';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5145';

  constructor(private http: HttpClient) {}

  postUser(data: User): Observable<number> {
    const url = `${this.apiUrl}/`;
    return this.http.post<number>(url, data);
  }

  getUser(id: number): Observable<string> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<string>(url);
  }

  getUserList(): Observable<getUserResponse[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<getUserResponse[]>(url);
  }
}
