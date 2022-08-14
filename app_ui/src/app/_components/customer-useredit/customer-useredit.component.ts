
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-customer-useredit',
  templateUrl: './customer-useredit.component.html',
  styleUrls: ['./customer-useredit.component.css']
})
export class CustomerUsereditComponent implements OnInit {
  public userId = "";
  ngOnInit(): void {
    
    this.route.params.subscribe(paramMap=>{
      this.userId = paramMap['id'];  
      this.getSingleUser(this.userId );
      console.log(this.user);      
  });
  }
 
  public user: User = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    user_role: '',
    height: 0,
    weight: '',
    gender:'',
    BMI: ''
  };
  constructor(
    private UserService: UserService,
      private fb: FormBuilder,
    //   private router: Router,
      private route: ActivatedRoute
  ) { }
  public updateNewUser(user: User): void{ 
    this.UserService.editUser(user);
    this.getSingleUser(this.userId );
    console.log(user.first_name);
    localStorage.setItem('first_name',user.first_name);
    localStorage.setItem('last_name',user.last_name);
    localStorage.setItem('email',user.email);
    localStorage.setItem('gender',user.gender);
    localStorage.setItem('height',user.height.toString());
    localStorage.setItem('weight',user.weight);
    window.location.href='/user/user-details';
  }
  public getSingleUser(user_id : string){
    this.UserService.getSingleUser(user_id).subscribe((user: User) => {
      this.user = {
       _id: user._id,
       first_name: user.first_name,
       last_name: user.last_name,
       email: user.email,
       password:user.password,
       user_role:user.user_role,
       height: user.height,
       weight: user.weight,
       gender:user.gender,
       BMI:user.BMI,
     }; 
   });
  }

}
