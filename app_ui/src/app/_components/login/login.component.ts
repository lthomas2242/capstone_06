import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User();
  constructor(private userService : UserService,public router: Router) { }

  ngOnInit(): void {
  }

  
  login(user : User){
    this.userService.login(user)
    .subscribe((userData : any)=>{
      // return userData;
      console.log(userData);  
    });
    // console.log(response);
    this.router.navigate(['/cust-layout/home']);
  }
}
