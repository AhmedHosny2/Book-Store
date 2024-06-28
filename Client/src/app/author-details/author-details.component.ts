import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthorService } from "../services/author/author.service";
import { BookService } from "../services/book/book.service";
import { Book } from "../shared/models/Book";
// ngModel
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  standalone: true,
  imports: [NgFor, FormsModule,NgIf],


  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  author: any;
  editingBook: number | null = null; // Track which book is being edited

  bookFormVisible: boolean = false;
  book: any = { title: '', description: '', authorId: null, cover :'' }; // Adjust as per your book schema

  constructor(private route: ActivatedRoute, private authorService: AuthorService, private bookService: BookService) {}

  ngOnInit(): void {
    const authorId = this.route.snapshot.paramMap.get('id');
    this.getAuthorDetails(authorId);
  }

  getAuthorDetails(id: any): void {
    this.authorService.getAuthor(id).subscribe(author => {
      this.author = author[0];
      console.log(this.author);
      
    });
  }

  showBookForm(): void {
    this.bookFormVisible = true;
  }
  editBook(book: any): void {
    this.editingBook = book.id;
    // Optionally, make a copy of the book object to avoid direct changes until saved
  }

  saveBook(book: any): void {
    console.log(book);
    
    this.bookService.updateBook(book).subscribe(updatedBook => {
      // Handle success, update UI or reset editing state
      this.editingBook = null; // Reset editing state after saving
    });
  }

  cancelEdit(): void {
    this.editingBook = null; // Cancel editing, reset state
  }

  deleteBook(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(() => {
      // Refresh author details after deletion
      this.getAuthorDetails(this.author.id);
    });
  }

  // submitBookForm(): void {
  //   this.newBook.authorId = this.author.id;
  //   this.bookService.addBook(this.newBook).subscribe(() => {
  //     // Refresh author details after adding a new book
  //     this.getAuthorDetails(this.author.id);
  //     this.bookFormVisible = false;
  //     this.newBook = { title: '', description: '', authorId: null };
  //   });
  // }
}
