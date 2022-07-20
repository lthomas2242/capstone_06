import { Component, OnInit } from '@angular/core';
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

  public user = new User();
  constructor(private userService : UserService,
    public router: Router,
    // private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  
  login(user : User){
    this.userService.login(user)
    .subscribe({
      next: (v) => {
        this.router.navigate(['/cust-layout/home']);
      },
      // error: (e) => this._snackBar.open(e.error.message, "close", {duration: 2000})
  });
  }
}
