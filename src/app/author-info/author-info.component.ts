import { Component, Input, OnInit } from '@angular/core';
import { BookInfoTypes } from '../app.component';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css'],
})
export class AuthorInfoComponent implements OnInit {
  @Input() BookInfo!: BookInfoTypes;
  constructor() {}

  ngOnInit(): void {}
}
