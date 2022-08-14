import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

import { matchPassword  } from './validatePassword';
import { ToastrService } from 'ngx-toastr';
import { BMIService } from 'src/app/_services/bmi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {
  public user = new User();

  userForm!: FormGroup;
  submitted = false;
  constructor(private userService : UserService,public router: Router, private fb: FormBuilder, private toastr: ToastrService,
    public bmiService : BMIService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      first_name: ["", [Validators.required, Validators.minLength(4)]],
      last_name: ["", Validators.required],
      email: ["", Validators.required],
      height: ["", Validators.required],
      weight: ["", Validators.required],
      gender: ["", Validators.required],
      password: ["", Validators.required],
      c_password: ["", Validators.required],
      BMI: [""]
    }, {
      validator: matchPassword('password', 'c_password')
    });
  }


  public createUser() {
    this.submitted = true;
    console.log(this.userForm.controls);
     // stop here if form is invalid
     if (this.userForm.invalid) {
        return;
    } else {
      this.calculateBMI();
      this.userService.createUser(this.userForm.value);
      this.toastr.success('User registered successfully !', 'Sucsess!');
    }
    
  }

  calculateBMI(){
    var bmi=this.bmiService.calculateBMI(this.userForm.controls['height'].value,this.userForm.controls['weight'].value);
    (<FormControl> this.userForm.controls['BMI']).setValue(bmi.toFixed(3));
  }

}


