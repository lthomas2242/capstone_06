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
    this.UserService
    .getUsers()
    .subscribe((books: User[]) => {
      this.users = books.map(user => {
        return user;
      })
    })
  }
  deleteUser(userId:string){
    this.UserService.DeleteUser(userId);  
  }

}
