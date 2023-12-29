import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path : 'home', component:HomeComponent},
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', component: UserListComponent},
  {path: 'create-user', component: CreatUserComponent},
    {path: 'update-user/:id', component: UpdateUserComponent},

    {path: 'view', component:ViewComponent}

 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
