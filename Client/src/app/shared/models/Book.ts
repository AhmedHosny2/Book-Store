export class Book{
    constructor(id: number, title: string, description: string, author: string, 
        price: number, rating: number, cover: string, )
        {
            this.id = id;
            this.title = title;
            this.description = description;
            this.author = author;
            this.price = price;
            this.rating = rating;
            this.cover = cover;

        }
    id: number;
    title: string;
    description: string;
    author: string;
    price: number;
    rating: number;
    cover: string;

}