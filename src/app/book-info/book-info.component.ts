import { Component, Input, OnInit } from '@angular/core';
import { BookInfoTypes } from '../app.component';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css'],
})
export class BookInfoComponent implements OnInit {
  @Input() BookInfo!: BookInfoTypes;

  constructor() {}

  ngOnInit(): void {
    console.log(this.BookInfo);
  }
}
