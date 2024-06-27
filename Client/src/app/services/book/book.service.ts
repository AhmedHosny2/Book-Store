import { Injectable } from '@angular/core';
import { Book } from '../../shared/models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Book[] {
    console.log("getBooks");

    return [
      new Book(
        1,
        'The Great Gatsby',
        'The Great Gatsby is a novel by American author F. Scott Fitzgerald. The book was first published in 1925, and it has been republished in 2004. The Great Gatsby is a novel about the lives of the wealthy people in the 1920s.',
        'F. Scott Fitzgerald',
        10.99,
        4.5,
'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ),
      new Book(
        2,
        'To Kill a Mockingbird',
        'To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.',
        'Harper Lee',
        8.99,
        4.8,
'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'      ),
      new Book(
        3,
        '1984',
        '1984, novel by George Orwell published in 1949 as a warning against totalitarianism. The chilling dystopia made a deep impression on readers.',
        'George Orwell',
        9.99,
        4.7,
'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'      )
    ];
  }
}
