import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   // url to server
   private userUrl = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient, private router: Router) { }
  getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  //user login
  login(user:User): Observable<any>{
    return this.http.post<any>(this.userUrl+'/login', user);
  }

  createUser(user: User) {
    return this.http.post<User>(this.userUrl+'/register', user)
    .subscribe((user : User)=>{
      this.router.navigate(['/']);
    })
  }
  DeleteUser(userId: string): Promise<void | User> {
    return this.http
      .delete(this.userUrl + '/' + userId)
      .toPromise()
      .then((response) => response as User)
      .catch(this.handleError);
  }
  private handleError(error: any) {
    console.log('error');
  }

  getAllUsersCount() : Observable<any>{
    return this.http.get<User>(this.userUrl+"/count/all");
  }
}
