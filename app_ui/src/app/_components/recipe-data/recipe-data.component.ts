import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/_constants/categories';
import { MealTypes } from 'src/app/_constants/meal_types';
import { Filter } from 'src/app/_models/filter';
import { Recipe } from 'src/app/_models/recipe';
import { RecipeService } from 'src/app/_services/recipe.service';

@Component({
  selector: 'app-recipe-data',
  templateUrl: './recipe-data.component.html',
  styleUrls: ['./recipe-data.component.css']
})
export class RecipeDataComponent implements OnInit {

  public categories : any =[];
  public mealTypes : any =[];
  public caloriesRange : any =[];
  public allRecipes : Recipe[] = [];
  public recipes: Recipe[] = [];
  filter = new Filter();
  
  constructor(public recipeService:RecipeService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getMealTypes();
    this.getCaloriesRange();
    this.getAllApprovedRecipes();
  }


  onChangeCategory(event : any,index:number){
    this.categories[index].checked = !  this.categories[index].checked;
    this.filter.category = this.categories.filter((r:any)=>r.checked);
    this.searchForRecipes();
  }

  onChangeCalory(event : any,index:number){
    this.caloriesRange[index].checked = !  this.caloriesRange[index].checked;
    this.filter.calories = this.caloriesRange.filter((r:any)=>r.checked);
    this.searchForRecipes();
  }

  getAllApprovedRecipes(){
    this.recipeService.getAllRecipes().subscribe({
      next: (v) => {
        let approvedRecipes = v.filter((d:any)=>d.approved);
        this.recipes = approvedRecipes;
        this.allRecipes = approvedRecipes;
      },
      error: (e) => {
        
      }
  });
  }
  searchForRecipes(){
    if(this.filter != undefined && this.filter != null){
      this.recipes = this.allRecipes;
      //check title
      if( this.filter.title != null && this.filter.title != ""){
        this.recipes = this.recipes.filter(r=>r.title.includes(this.filter.title)); 
      }
      //check meal type
      if( this.filter.meal_type != undefined && this.filter.meal_type != ""){
        this.recipes = this.recipes.filter(r=>r.meal_type==this.filter.meal_type); 
      }
      //check category
      if( this.filter.category != undefined && this.filter.category != null && this.filter.category.length > 0){
        let selectedCategories = this.filter.category.map((c:any)=>c.key);
        this.recipes = this.recipes.filter(r=> selectedCategories.includes(r.category)); 
      }
      //check calory
      if( this.filter.calories != undefined && this.filter.calories != null && this.filter.calories.length > 0){
        this.recipes = this.recipes.filter((r) => {
          return  this.filter.calories.some((c:any) => {
            return r.nutritions.calories > c.start && r.nutritions.calories < c.end;
          });
        });
      }
    }  
    this.recipes =[...this.recipes] ;
  }

  getCategories(){
    for (var enumValue in Categories) {
      if (isNaN(Number(enumValue))) {
        this.categories.push({
          key : enumValue,
          value :  Categories[enumValue],
          checked : false
        });
      }
    }
  }

  getMealTypes(){
    for (var enumValue in MealTypes) {
      if (isNaN(Number(enumValue))) {
        this.mealTypes.push(
          {
            key : enumValue,
            value :  MealTypes[enumValue]
          });
      }
    }
  }

  getCaloriesRange(){
    this.caloriesRange.push({
      id : 1,
      start : 0,
      end : 100,
      checked : false
    },
    {
      id : 2,
      start : 100,
      end : 200,
      checked : false
    },
    {
      id : 3,
      start : 200,
      end : 300,
      checked : false
    },
    {
      id : 4,
      start : 300,
      end : 400,
      checked : false
    },
    {
      id : 5,
      start : 400,
      end : 500,
      checked : false
    },
    {
      id : 6,
      start : 500,
      end : 600,
      checked : false
    },
    {
      id : 7,
      start : 600,
      end : 700,
      checked : false
    })
  }


  clearAllFilters(){
    this.filter = new Filter();
    this.recipes = this.allRecipes;
    localStorage.removeItem("bmi");
  }
}
