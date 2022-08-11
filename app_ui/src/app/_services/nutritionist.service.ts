import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nutritionist } from '../_models/nutritionist';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NutritionistService {

   // url to server
   private nutritionistUrl = 'http://localhost:3000/api/nutritionist';

  constructor(private http: HttpClient, private router: Router) { }
  getNutritionists() {
    return this.http.get<Nutritionist[]>(this.nutritionistUrl);
  }
//   getSingleUser(userId: string) : Observable<any> {
//     return this.http.get(this.userUrl + '/' + userId);
//   }


  createUser(nutritionist: Nutritionist) {
    return this.http.post<Nutritionist>(this.nutritionistUrl+'/addNutritionist', nutritionist)
    .subscribe((nutritionist : Nutritionist)=>{
      this.router.navigate(['/']);
    })
  }
//   editUser(user: User): Promise<void | User> {
//     console.log('Selected User', user);
//     return this.http
//       .put(this.userUrl + '/' + user._id, user)
//       .toPromise()
//       .then((response) => response as User)
//       .catch(this.handleError);
//   }
  
//   DeleteUser(userId: string): Promise<void | User> {
//     return this.http
//       .delete(this.userUrl + '/' + userId)
//       .toPromise()
//       .then((response) => response as User)
//       .catch(this.handleError);
//   }
  private handleError(error: any) {
    console.log('error');
  }

//   getAllUsersCount() : Observable<any>{
//     return this.http.get<User>(this.userUrl+"/count/all");
//   }
}
