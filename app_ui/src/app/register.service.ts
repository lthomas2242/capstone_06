import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private foodsUrl = 'http://localhost:3000/api/foods';
  constructor() { }

  createFood(usr: User) {
    return this.http.post<User>(this.foodsUrl, usr)
    .subscribe((usr : User)=>{
      this.router.navigate(['/']);
    })
  }
}
