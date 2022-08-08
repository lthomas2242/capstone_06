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
  public recipes : Recipe[] = [];
  filter = new Filter();
  
  constructor(public recipeService:RecipeService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getMealTypes();
    this.getCaloriesRange();
    this.getRecipesByFilter();
  }


  onChangeCategory(event : any,index:number){
    this.categories[index].checked = !  this.categories[index].checked;
    this.filter.category = this.categories;
    this.searchForRecipes();
  }

  getRecipesByFilter(){
    this.recipeService.getAllRecipes().subscribe({
      next: (v) => {
        this.recipes = v;
        this.allRecipes = v;
      },
      error: (e) => {
        
      }
  });
  }
  searchForRecipes(){
    console.log(this.filter);
    
    if(this.filter != undefined && this.filter != null){
      //check title
      if( this.filter.title != null && this.filter.title != ""){
        this.recipes = this.recipes.filter(r=>r.title.includes(this.filter.title)); 
        console.log(this.recipes)
      }else{
        this.recipes = this.allRecipes;
      }
      //check meal type
      if( this.filter.meal_type != undefined && this.filter.meal_type != ""){
        this.recipes = this.recipes.filter(r=>r.meal_type==this.filter.meal_type); 
        console.log(this.recipes)
      }else{
        this.recipes = this.allRecipes;
      }
      //check category
      if( this.filter.category != undefined && this.filter.category != null && this.filter.category.length > 0){
        this.recipes = this.recipes.filter(r=> this.filter.category.includes(r.category)); 
        console.log(this.recipes)
      }else{
        this.recipes = this.allRecipes;
      }


      //check calory
    }  
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
      start : 0,
      end : 100
    },
    {
      start : 100,
      end : 200
    },
    {
      start : 200,
      end : 300
    },
    {
      start : 300,
      end : 400
    },
    {
      start : 400,
      end : 500
    },
    {
      start : 500,
      end : 600
    },
    {
      start : 600,
      end : 700
    })
  }
}
