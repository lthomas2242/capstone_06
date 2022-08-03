import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingList } from '../_models/shoppingList';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private apiUrl = 'http://localhost:3000/api/list';

  constructor(private http: HttpClient, private router: Router,  private toastr: ToastrService) { }

<<<<<<< HEAD
  createList(list: ShoppingList) {
    console.log("service", list);
    return this.http.post<ShoppingList>(this.apiUrl+'/store', list)
    // .subscribe((list : ShoppingList)=>{   
    //   this.router.navigate(['/cust-layout/home']);
    // })
=======
  createList(list: ShoppingList) : Observable<any> {
    return this.http.post<ShoppingList>(this.apiUrl+'/store', list);
>>>>>>> d6a46e85a480379cdabb3f228ad498393abd650f
  }

  getList() {
    return this.http.get<ShoppingList[]>(this.apiUrl);  
  }

  deleteList(id: String) {
    return this.http.delete(this.apiUrl+'/delete/'+id);
<<<<<<< HEAD
        // .subscribe(() => {
        //   this.router.navigate(['/cust-layout/home']);
        // });
  }

  getListById(listId: string) {
    console.log("service list", this.apiUrl+'/single/'+listId);
    return this.http.get<ShoppingList>(this.apiUrl+'/single/'+listId);
=======
>>>>>>> d6a46e85a480379cdabb3f228ad498393abd650f
  }
}
