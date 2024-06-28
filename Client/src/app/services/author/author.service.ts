import { Injectable } from '@angular/core';
import { Book } from '../../shared/models/Book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private apiUrl = 'http://localhost:3000/authors'; // Your Node.js API URL

  constructor(private http: HttpClient) {}
  getAuthor(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateAuthor(id: number, updatedAuthor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedAuthor);
  }

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
