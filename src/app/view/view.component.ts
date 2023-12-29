import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 
  users: User[] = [];

  constructor(private userService : UserService,
    private router:Router) {}
  

  ngOnInit(): void {

   this.getUsers();
    }

    private getUsers() {
      this.userService.getUsersList().subscribe(data => {
          this.users = data;
      });
        }
      
        updateUser(id:number){
          this.router.navigate(['update-user',id]);

        }
        updateAppointment(id:number){
          this.router.navigate(['updateappointment']);
        }
        deleteUser(id:number){
          this.userService.deleteUser(id).subscribe(data =>{
           console.log(data);
            this.getUsers();
          })
        }
  }

 {

}
