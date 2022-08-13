import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredients, Nutritions, Recipe } from 'src/app/_models/recipe';
import { RecipeService } from 'src/app/_services/recipe.service';
import { ToastrService } from 'ngx-toastr';
import { Categories } from 'src/app/_constants/categories';
import { MealTypes } from 'src/app/_constants/meal_types';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-my-recipe-edit',
  templateUrl: './my-recipe-edit.component.html',
  styleUrls: ['./my-recipe-edit.component.css']
})
export class MyRecipeEditComponent implements OnInit {

  @Input() recipeId: any;
  public recipe = new Recipe();
  public categories : any =[];
  public mealTypes : any =[];

  constructor(private recipeService : RecipeService,
    public router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.recipe.ingredients =  [];
    this.recipe.nutritions = new Nutritions();
    this.recipe.directions=[];
    this.getCategories();
    this.getMealTypes();
    this.getRecipeById();

    this.recipeId = this.route.snapshot.params['id'];
  }

  getRecipeById(){
    this.route.params.pipe(
      switchMap((params: Params)=>{
        return this.recipeService.getRecipeById(params['id'])
      })      
    ).subscribe((recipe: Recipe)=>{
      this.recipe = recipe;
    })
}

  saveRecipe(recipeToSave : Recipe){
   
      this.recipeService.updateRecipe(recipeToSave)
        .subscribe({
          next: (v) => {
            this.toastr.success("Recipe Updated Successfully", 'Success', {
              timeOut: 3000,
              positionClass:'toast-bottom-right' 
            });
            this.router.navigate(['/user/my-recipes']);
          },
          error: (e) => {
            this.toastr.error(e.error.message, 'Error', {
              timeOut: 3000,
              positionClass:'toast-bottom-right' 
            });
          }
      });
    }


  addIngredient(){
    this.recipe.ingredients.push(new Ingredients);
  }
  addDirection(){
    this.recipe.directions.push(new String());
  }

  getCategories(){
    for (var enumValue in Categories) {
      if (isNaN(Number(enumValue))) {
        this.categories.push({
          key : enumValue,
          value :  Categories[enumValue]
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

}
