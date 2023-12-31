import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { AppBooksComponent } from './components/app-books/app-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes:Routes=[
  {path:'public',component:PublicComponent,
     children:[
      {path:'all-books',component:AppBooksComponent},
      {path:'book-details/:id/author/:id',component:BookDetailsComponent}
     ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PublicRoutingModule { }
