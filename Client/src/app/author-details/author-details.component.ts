import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthorService } from "../services/author/author.service";
import { BookService } from "../services/book/book.service";
import { Book } from "../shared/models/Book";

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  author: any;
  bookFormVisible: boolean = false;
  newBook: any = { title: '', description: '', authorId: null }; // Adjust as per your book schema

  constructor(private route: ActivatedRoute, private authorService: AuthorService, private bookService: BookService) {}

  ngOnInit(): void {
    const authorId = this.route.snapshot.paramMap.get('id');
    this.getAuthorDetails(authorId);
  }

  getAuthorDetails(id: any): void {
    this.authorService.getAuthor(id).subscribe(author => {
      this.author = author;
    });
  }

  showBookForm(): void {
    this.bookFormVisible = true;
  }

  editBook(book: Book): void {
    // Implement edit functionality
  }

  deleteBook(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(() => {
      // Refresh author details after deletion
      this.getAuthorDetails(this.author.id);
    });
  }

  submitBookForm(): void {
    this.newBook.authorId = this.author.id;
    this.bookService.addBook(this.newBook).subscribe(() => {
      // Refresh author details after adding a new book
      this.getAuthorDetails(this.author.id);
      this.bookFormVisible = false;
      this.newBook = { title: '', description: '', authorId: null };
    });
  }
}
