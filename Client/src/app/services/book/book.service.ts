import { Injectable } from '@angular/core';
import { Book } from '../../shared/models/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  getBooks(): Book[] {
    console.log('getBooks');

    return [
      new Book(
        '1',
        'The Great Gatsby',
        'The Great Gatsby is a novel by American author F. Scott Fitzgerald. The book was first published in 1925, and it has been republished in 2004. The Great Gatsby is a novel about the lives of the wealthy people in the 1920s.',
        10.99,
        4.5,
        'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '1',
        'F. Scott Fitzgerald'
      ),
      new Book(
        '2',
        'To Kill a Mockingbird',
        'To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, it won the Pulitzer Prize and has become a classic of modern American literature. The novel is renowned for its warmth and humor, despite dealing with serious issues of rape and racial inequality.',
        7.99,
        4.8,
        'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '2',
        'Harper Lee'
      ),

      new Book(
        '3',
        '1984',
        "1984 is a dystopian novel by English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime. Thematically, it centers on the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviors within society.",
        6.99,
        4.6,
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '3',
        'George Orwell'
      ),

      new Book(
        '4',
        'Pride and Prejudice',
        'Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.',
        9.99,
        4.7,
        'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '4',
        'Jane Austen'
      ),

      new Book(
        '5',
        'The Catcher in the Rye',
        'The Catcher in the Rye is a novel by J.D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It is about the complex issues of innocence, identity, belonging, loss, connection, and alienation experienced by the protagonist, Holden Caulfield.',
        8.99,
        4.3,
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '5',
        'Herman Melville'
      ),

      new Book(
        '6',
        'Moby Dick',
        "Moby Dick is a novel by Herman Melville, published in 1851 during the period of the American Renaissance. Sailor Ishmael narrates the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge against Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee.",
        11.99,
        4.1,
        'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        '6',
        'Herman Melville'
      ),
    ];
  }
  getUniqueAuthors(books: Book[]): string[] {
    const authors = books.map((book) => book.authorName); 
    return Array.from(new Set(authors)).sort();
  }
}
