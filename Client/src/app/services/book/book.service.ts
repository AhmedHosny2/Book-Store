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
  getUniqueAuthors():  Observable<any> {
    console.log(`${this.apiUrl}/authors`);
  return this.http.get(`${this.apiUrl}/authors`);
  }
}
