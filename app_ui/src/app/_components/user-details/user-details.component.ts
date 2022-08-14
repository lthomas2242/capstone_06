import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public user = new User();
  id =  localStorage.getItem('id');
  constructor(public userService : UserService) { }

  ngOnInit(): void {
    
    if(this.id != null){
      this.userService.getSingleUser(this.id).subscribe({
        next: (v) => {
          this.user = v;
        },
        error: (e) => {
          
        }
      });
    }
  }
}
