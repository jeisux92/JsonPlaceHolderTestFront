import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CoreModule } from '../core/core.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '', component: UsersComponent,
  }, {
    path: 'user/:id', component: UserDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsersComponent, UserComponent, UserDetailComponent]
})
export class UserModule { }

