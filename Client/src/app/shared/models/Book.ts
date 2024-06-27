export class Book {
  constructor(
    id: string,
    title: string,
    description: string,
    price: number,
    rating: number,
    cover: string,
    authorId: string,
    authorName: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.cover = cover;
    this.authorName = authorName;
    this.authorId = authorId;
  }
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  cover: string;
  authorName: string;
  authorId: string;
}
