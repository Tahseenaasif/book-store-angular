import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBooksComponent } from './app-books.component';

describe('AppBooksComponent', () => {
  let component: AppBooksComponent;
  let fixture: ComponentFixture<AppBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
