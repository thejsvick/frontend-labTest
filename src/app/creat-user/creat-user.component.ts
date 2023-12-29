import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.css']
})
export class CreatUserComponent implements OnInit {

  user : User = new User();
  constructor(private userService: UserService,
    private router: Router){}
  ngOnInit(): void {
   
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data =>{
      console.log(data);
      this. goToUserList();
    },
    error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/user']);

  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
}
