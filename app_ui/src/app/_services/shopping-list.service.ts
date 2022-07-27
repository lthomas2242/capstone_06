import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingList } from '../_models/shoppingList';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private apiUrl = 'http://localhost:3000/api/list';

  constructor(private http: HttpClient, private router: Router) { }

  createList(list: ShoppingList) {
    console.log("service", list);
    return this.http.post<ShoppingList>(this.apiUrl, list)
    .subscribe((list : ShoppingList)=>{
      this.router.navigate(['/']);
    })
  }

  getList() {
    return this.http.get<ShoppingList[]>(this.apiUrl);  
  }
}
