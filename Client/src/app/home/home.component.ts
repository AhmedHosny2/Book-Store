import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { NgFor } from '@angular/common';
import { Book } from '../shared/models/Book';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],


  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent 
  implements OnInit{

  books: Book[] = this.getBooks();
  constructor(private bookService: BookService) { }
  ngOnInit(): void {

      this.books = this.getBooks();
      console.log(this.books);
  }
  getBooks() {
    return this.bookService.getBooks();
  }

}
