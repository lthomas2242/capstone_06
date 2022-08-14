import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../_models/recipe';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

   // url to server
   private recipeUrl = 'http://localhost:3000/api/recipe';
   recipes: Recipe[] = [];

  constructor(private http: HttpClient, private router: Router) { }


  getAllRecipes() : Observable<any>{
    return this.http.get<Recipe>(this.recipeUrl);
  }

  getRecipeById(recipe_id : any)  : Observable<any> {
    return this.http.get<Recipe>(this.recipeUrl+"/"+recipe_id);
  }

  createRecipe(recipe: Recipe) : Observable<any>{
    return this.http.post<Recipe>(this.recipeUrl, recipe);
  }

  updateRecipe(recipe: Recipe) : Observable<any>{
    return this.http.put<Recipe>(this.recipeUrl+"/"+recipe._id, recipe);
  }

  deleteRecipe(recipe_id: any) : Observable<any>{
    return this.http.delete<Recipe>(this.recipeUrl+"/"+recipe_id);
  }

  getAllRecipeIds() : Observable<any>{
    return this.http.get<Recipe>(this.recipeUrl+"/ids");
  }

  getAllRecipesCount() : Observable<any>{
    return this.http.get<Recipe>(this.recipeUrl+"/count/all");
  }

  getApprovedRecipesCount() : Observable<any>{
    return this.http.get<Recipe>(this.recipeUrl+"/count/approved");
  }


  getMyRecipes(userid: any) : Observable<any>{ 
    return this.http.get<Recipe>(this.recipeUrl+"/byusers/"+userid);
  }
  getRecipesByFilters() : Observable<any>{
    return this.http.get<Recipe>(this.recipeUrl+"/filters");
  }

  getAllApprovedRecipes() : Observable<any>{
    return this.http.get<Recipe>(this.recipeUrl+"/approved");
  }

  
  filterRecipieByBMICal(calorie : number,allRecipes : Recipe[] ){
    this.recipes =[];
    let breakfastItems = allRecipes.filter((r:any)=>r.category === "Breakfast" && (r.nutritions != undefined || r.nutritions != null));
    let lunchItems = allRecipes.filter((r:any)=>r.category === "Lunch" && (r.nutritions != undefined || r.nutritions != null));
    let dinnerItems = allRecipes.filter((r:any)=>r.category === "Dinner" && (r.nutritions != undefined || r.nutritions != null));
    let juiceItems = allRecipes.filter((r:any)=>r.category === "Juice" && (r.nutritions != undefined || r.nutritions != null));
    let addedCalorie = 0;
    let breakfastElement = new Recipe; let lunchElement = new Recipe ; let dinnerElement = new Recipe;let juiceElement = new Recipe;
    let counter = 0;
    while(true){
      counter++;
      if(breakfastItems!=null && breakfastItems.length > 0){
        breakfastElement = breakfastItems[Math.floor(Math.random() * breakfastItems.length)]; 
        addedCalorie += Number(breakfastElement.nutritions.calories);
      }
      if(lunchItems!=null && lunchItems.length > 0){
        lunchElement = lunchItems[Math.floor(Math.random() * lunchItems.length)]; 
        addedCalorie += Number(lunchElement.nutritions.calories);
      }
      if(dinnerItems!=null && dinnerItems.length > 0){
        dinnerElement = dinnerItems[Math.floor(Math.random() * dinnerItems.length)]; 
        addedCalorie += Number(dinnerElement.nutritions.calories);
      }
      if(juiceItems!=null && juiceItems.length > 0){
        juiceElement = juiceItems[Math.floor(Math.random() * juiceItems.length)]; 
        addedCalorie += Number(juiceElement.nutritions.calories);
      }
      if(addedCalorie != 0 && calorie == addedCalorie || calorie >= addedCalorie-100 ){
        this.recipes = [];
        this.recipes.push(breakfastElement,lunchElement,dinnerElement,juiceElement);
        break;
      }else if(counter == 10){
        this.recipes = [];
        break;
      }
     }
     return this.recipes;
  }
}
