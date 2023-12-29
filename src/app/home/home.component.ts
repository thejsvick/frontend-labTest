import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = new User();
  isSignUp: boolean = false; // Indicates whether it's a sign-up or login
  loginError: string = ''; // Variable to store login error message

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  saveUser() {
    if (this.isSignUp) {
      // Handle sign-up logic
      this.userService.createUser(this.user).subscribe(
        (data) => {
          console.log('User created successfully:', data);
          this.goToUserList();
        },
        (error) => console.log('Error creating user:', error)
      );
    } else {
      // Handle login logic
      this.userService.getUsersList().subscribe(
        (data) => {
          // Check if the entered credentials match any user
          const foundUser = data.find(
            (u) => u.emailId === this.user.emailId && u.password === this.user.password
          );

          if (foundUser) {
            console.log('Login successful:', foundUser);
            this.goToUserList(); // Navigate to user list after successful login
          } else {
            console.log('Invalid credentials');
            this.loginError = 'Invalid email or password'; // Set the error message
          }
        },
        (error) => console.log('Error fetching users:', error)
      );
    }
  }

  goToUserList() {
    this.router.navigate(['/user']);
  }

  onSubmit() {
    console.log(this.user);

    // Reset login error on each submission attempt
    this.loginError = '';

    // Call saveUser method to handle either login or sign-up
    this.saveUser();
  }

  toggleSignUp() {
    // Toggle between login and sign-up modes
    this.isSignUp = !this.isSignUp;
    this.user = new User(); // Reset user object when switching modes
  }
}