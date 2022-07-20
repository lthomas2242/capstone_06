import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {
  public user = new User();
  constructor(private userService : UserService,public router: Router) { }

  ngOnInit(): void {
  }

  public createUser(user: User):void {
    console.log(user);
    this.userService.createUser(user);
  }

}
