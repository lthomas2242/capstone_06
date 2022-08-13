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
  getSingleNutritionist(nutritionistId: string) : Observable<any> {
    return this.http.get(this.nutritionistUrl + '/' + nutritionistId);
  }


  createUser(nutritionist: Nutritionist) {
    return this.http.post<Nutritionist>(this.nutritionistUrl+'/addNutritionist', nutritionist)
    .subscribe((nutritionist : Nutritionist)=>{
      this.router.navigate(['/admin/nutritionist-list']);
    })
  }
  editNutritionist(nutritionist: Nutritionist): Promise<void | Nutritionist> {
    console.log('Selected Nutritionist', nutritionist);
    return this.http
      .put(this.nutritionistUrl + '/' + nutritionist._id, nutritionist)
      .toPromise()
      .then((response) => response as Nutritionist)
      .catch(this.handleError);
  }
  
  DeleteNutritionist(nutritionistId: string): Promise<void | Nutritionist> {
    return this.http
      .delete(this.nutritionistUrl + '/' + nutritionistId)
      .toPromise()
      .then((response) => response as Nutritionist)
      .catch(this.handleError);
  }
  private handleError(error: any) {
    console.log('error');
  }

//   getAllUsersCount() : Observable<any>{
//     return this.http.get<User>(this.userUrl+"/count/all");
//   }
}
