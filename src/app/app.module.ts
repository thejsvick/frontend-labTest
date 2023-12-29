import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HomeComponent } from './home/home.component';

import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    CreatUserComponent,
    UpdateUserComponent,
  
    ViewComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
