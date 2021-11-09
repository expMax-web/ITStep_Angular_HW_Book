import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCoverComponent } from './book-cover/book-cover.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { AuthorAvatarComponent } from './author-avatar/author-avatar.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BookInfoItemComponent } from './book-info-item/book-info-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCoverComponent,
    BookInfoComponent,
    AuthorInfoComponent,
    AuthorAvatarComponent,
    ReviewsComponent,
    BookInfoItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
