import { Component, OnInit } from '@angular/core';
import { BMI } from 'src/app/_models/bmi';
import { User } from 'src/app/_models/user';
import { BMIService } from 'src/app/_services/bmi.service';
import { UserService } from 'src/app/_services/user.service';
import { Recipe } from '../../_models/recipe';
import { RecipeService } from '../../_services/recipe.service';

@Component({
  selector: 'app-random-recipe',
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.css']
})
export class RandomRecipeComponent implements OnInit {

  public allRecipes :  Recipe[] = [];
  public randomRecipe = new Recipe();
  public recipesForDay : Recipe[] = [];
  id =  localStorage.getItem('id');
  public user = new User();
  public bmiData = new BMI();

  constructor(private recipeService : RecipeService, private userService : UserService,
    public bmiService : BMIService) { }

  ngOnInit(): void {
    this.getCurrentUserDetails();
    this.getAllRecipes();
  }

  getAllRecipes(){
    this.recipeService.getAllRecipes()
      .subscribe({
        next: (v) => {
          this.allRecipes = v;
          this.bmiData.age = 30;
          this.bmiData.gender = this.user.gender;
          this.bmiData.height = this.user.height;
          this.bmiData.weight = Number(this.user.weight);
          this.bmiData.activity = "sedentary"
          this.bmiData = this.bmiService.calculateBMR( this.bmiData);
          this.bmiData = this.bmiService.calculateCalories( this.bmiData);          
          this.recipesForDay = this.recipeService.filterRecipieByBMICal(this.bmiData.bmiResult.calories,this.allRecipes);
          this.getRandomRecipe();
        },
    });
  }
  getRandomRecipe(){
    this.randomRecipe = this.recipesForDay[Math.floor(Math.random() * this.recipesForDay.length)];
    if( this.randomRecipe == undefined){
      this.randomRecipe = this.allRecipes[Math.floor(Math.random() * this.allRecipes.length)];
    }
    console.log(this.randomRecipe)
  }

  getCurrentUserDetails(){
    if(this.id != null){
      this.userService.getSingleUser(this.id).subscribe({
        next: (v) => {
          this.user = v;
        },
        error: (e) => {
          
        }
      });
    }
  }
}
