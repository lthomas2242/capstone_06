import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {MatSnackBar} from '@angular/material/snack-bar';

import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  public user = new User();
  constructor(private userService : UserService,
    private fb: FormBuilder,
    public router: Router,
    // private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  
  login(user : User){
    this.submitted = true;
    this.userService.login(user)
    .subscribe({
      next: (v) => {
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('email', user.email);
        localStorage.setItem('id', v[0]._id);
        localStorage.setItem('first_name', v[0].first_name);
        localStorage.setItem('last_name', v[0].last_name);
        localStorage.setItem('password', v[0].password);
        localStorage.setItem('height', v[0].height);
        localStorage.setItem('weight', v[0].weight);
        localStorage.setItem('gender', v[0].gender);
        if(v[0].user_role === "admin"){
          this.router.navigate(['/admin-layout/dashboard']);
        }else{
          this.router.navigate(['/cust-layout/home']);
        }
        
      },
      // error: (e) => this._snackBar.open(e.error.message, "close", {duration: 2000})
  });
  }
}
