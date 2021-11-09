import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInfoItemComponent } from './book-info-item.component';

describe('BookInfoItemComponent', () => {
  let component: BookInfoItemComponent;
  let fixture: ComponentFixture<BookInfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookInfoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
