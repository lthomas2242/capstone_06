import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
  export class UserEditComponent implements OnInit {
    public userId = "";
    public user: User = {
      _id: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      user_role: '',
      height: 0,
      weight: '',
      BMI: ''
    }; 
    constructor(private UserService: UserService,
      private route: ActivatedRoute) {
     } 
    ngOnInit(): void { 
      this.route.params.subscribe(paramMap=>{
          this.userId = paramMap['id'];  
          this.getSingleUser(this.userId );
          console.log(this.user);      
      });
     
    } 
    public updateNewUser(user: User): void{ 
      this.UserService.editUser(user);
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
         BMI:user.BMI,
       }; 
     });
    }
  
  }
  