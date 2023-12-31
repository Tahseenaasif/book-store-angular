import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AppBooksComponent } from './components/app-books/app-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';




@NgModule({
  declarations: [
    HomeComponent,
    AppBooksComponent,
    BookDetailsComponent,
    PublicComponent,
   
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
