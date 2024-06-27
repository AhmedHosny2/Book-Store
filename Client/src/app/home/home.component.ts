import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { Book } from '../shared/models/Book';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  searchQuery: string = '';
  selectedAuthor: string = '';
  uniqueAuthors: string[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.getBooks();
    this.uniqueAuthors = this.getUniqueAuthors(this.books);
  }

  getBooks(): Book[] {
    return this.bookService.getBooks();
  }

  getUniqueAuthors(books: Book[]): string[] {
    return this.bookService.getUniqueAuthors(books);

  }

  filteredBooks(): Book[] {
    let filteredBooks = this.books;

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredBooks = filteredBooks.filter(book =>
        book.title.toLowerCase().includes(query)
      );
    }

    if (this.selectedAuthor) {
      filteredBooks = filteredBooks.filter(book =>
        book.authorName === this.selectedAuthor
      );
    }

    return filteredBooks;
  }
}
