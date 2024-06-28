import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { Book } from '../shared/models/Book';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: any[] = [];
  searchQuery: string = '';
  selectedAuthor: string = '';
  uniqueAuthors: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.fetchBooks();
    this.fetchAuthors();
    console.log(this.uniqueAuthors);
    
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
      console.log(this.books);
      
    });
  }
  fetchAuthors(): void {
    this.bookService.getUniqueAuthors().subscribe(data => {
      this.uniqueAuthors = data;
      console.log(this.uniqueAuthors);
      
    });
  }

  filteredBooks(): any[] {
    let filteredBooks = this.books;

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredBooks = filteredBooks.filter(book =>
        book.title.toLowerCase().includes(query)
      );
    }

    if (this.selectedAuthor) {
      filteredBooks = filteredBooks.filter(book =>
        book.author.name === this.selectedAuthor
      );
    }

    return filteredBooks;
  }
}
