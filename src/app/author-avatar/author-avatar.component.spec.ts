import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAvatarComponent } from './author-avatar.component';

describe('AuthorAvatarComponent', () => {
  let component: AuthorAvatarComponent;
  let fixture: ComponentFixture<AuthorAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
