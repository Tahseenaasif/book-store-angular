import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AddBookComponent } from './componenst/add-book/add-book.component';
import { DeleteBookComponent } from './componenst/delete-book/delete-book.component';

const routes: Routes = [
  {
    path:'user',component:UserComponent,children:[
      {path:'add-book',component:AddBookComponent},
      {path:'delete-book',component:DeleteBookComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
