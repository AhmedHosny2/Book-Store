import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { NgFor,NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [NgFor, FormsModule,NgIf],

  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent  implements OnInit{
  authors: any[] = [];
  newAuthor = {
    name: '',
    bio: '',
    email: ''
  };
  currentPage: number = 1;
  itemsPerPage: number = 3;
  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAuthors();
    console.log(this.authors);
  }

  fetchAuthors(): void {
    this.bookService.getUniqueAuthors().subscribe(data => {
      this.authors = data;
      console.log(this.authors);
      
    });
  }
  goToBookDetails(bookId: number) {
    this.router.navigate(['/book', bookId]);
  }
  get paginatedAuthors(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.authors.slice(startIndex, startIndex + this.itemsPerPage);
  }
  navigateToauthorDetail = (id: number) => {
    this.router.navigate(['/author', id]);
  }
  
  // Function to handle changing the current page
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  // addAuthor(): void {
  //   this.authorService.addAuthor(this.newAuthor).subscribe(() => {
  //     this.getAuthors();
  //     this.newAuthor = { name: '', bio: '', email: '' };
  //   });
  // }
}
