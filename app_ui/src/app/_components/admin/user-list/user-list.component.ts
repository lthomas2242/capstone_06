import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService],
})
export class UserListComponent implements OnInit {

  public users: User[] = [];
  constructor(private UserService: UserService) {}
  ngOnInit(): void {
    this.getAllUsers();
  }
  deleteUser(userId:string){
    this.UserService.DeleteUser(userId);  
    this.getAllUsers();
  }

  getAllUsers(){
    this.UserService
    .getUsers()
    .subscribe((users: User[]) => {
      this.users = users.map(user => {
        return user;
      })
    })
  }
}
