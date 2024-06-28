import { Injectable } from '@angular/core';
import { Book } from '../../shared/models/Book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:3000'; // Your Node.js API URL

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    console.log('getBooks');
    return this.http.get(`${this.apiUrl}/books`);
     
  }
  addBook(newBook: any): Observable<any> {
    console.log('addBook');
    return this.http.post(`${this.apiUrl}/books`, newBook);
  }
  deleteBook(id: Number): Observable<any> {
    console.log('deleteBook');
    return this.http.delete(`${this.apiUrl}/books/${id}`);
  }

  getBookById(id: Number): Observable<any> {
    console.log('getBookById');
    return this.http.get(`${this.apiUrl}/books/${id}`);
  }
  
  getUniqueAuthors():  Observable<any> {
  return this.http.get(`${this.apiUrl}/authors`);
  }
  updateBook( updatedBook: any): Observable<any> {
    console.log('updateBook');
    return this.http.put(`${this.apiUrl}/books`, updatedBook);

  }
}
