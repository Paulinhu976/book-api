import { randomUUID } from 'crypto';
import { Request, Response } from 'express';
import { BookModel } from '../models/bookModel';

const books: BookModel[] = [];

export class BookController {
  static postBook(req: Request, res: Response): Response {
    const {
      bookTitle,
      author,
      publishingCompany,
      description,
      category,
      language,
    } = req.body;
    const id = randomUUID();

    const book = {
      id,
      bookTitle,
      author,
      publishingCompany,
      description,
      category,
      language,
    };

    books.push(book);

    return res.json(books);
  }

  static getBook(req: Request, res: Response): Response {
    return res.json(books);
  }
}
