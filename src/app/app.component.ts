import { Component } from '@angular/core';
import { DataService } from './aboutBook.service';

export interface BookReviewsTypes {
  title?: string;
  body?: string;
}
[];

export interface BookInfoTypes {
  book?: string;
  publishingYear?: string;
  author?: string;
  numberOfPages?: string;
  publishingHouse?: string;
  about?: string;
  aboutAuthor?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent {
  BookReviews: any = {};
  BookInfo: BookInfoTypes = {};
  constructor(private data: DataService) {}
  getBookInfo() {
    this.data.getData();
  }
  getBookReviews() {
    this.data.getReviews();
  }

  ngOnInit() {
    this.BookReviews = this.data.getReviews();
    this.BookInfo = this.data.getData();
  }
}
