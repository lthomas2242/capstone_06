import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   // url to server
   private userUrl = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) { }

  //user login
  login(user:User): Observable<any>{
    return this.http.post<any>(this.userUrl+'/login', user);
  }
}
