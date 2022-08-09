import { Component,Input, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredients, Nutritions, Recipe } from 'src/app/_models/recipe';
import { RecipeService } from 'src/app/_services/recipe.service';
import { ToastrService } from 'ngx-toastr';
import { Categories } from 'src/app/_constants/categories';
import { MealTypes } from 'src/app/_constants/meal_types';

@Component({
  selector: 'app-recipe-save',
  templateUrl: './recipe-save.component.html',
  styleUrls: ['./recipe-save.component.css']
})
export class RecipeSaveComponent implements OnInit {

  @Input() recipe_id: any;
  @Output() newItemSavedEvent = new EventEmitter<boolean>();
  @Output() closeModalEvent = new EventEmitter<boolean>();

  public recipe = new Recipe();
  public categories : any =[];
  public mealTypes : any =[];

  constructor(private recipeService : RecipeService,
    public router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.recipe.ingredients =  [];
    this.recipe.nutritions = new Nutritions();
    this.recipe.directions=[];
    this.getCategories();
    this.getMealTypes();
  }
  ngOnChanges():void{
    if(this.recipe_id != 0){
      this.getRecipeById(this.recipe_id)
    }else{
      this.recipe = new Recipe();
    }
  }

  getRecipeById(recipeId : any){
      this.recipeService.getRecipeById(recipeId)
      .subscribe({
        next: (v) => {
          this.recipe = v;
          if(!this.recipe.nutritions || this.recipe.nutritions == undefined || this.recipe.nutritions == null){
            this.recipe.nutritions = new Nutritions();
          }
          console.log(this.recipe)
        },
    });
  }

  saveRecipe(recipeToSave : Recipe){
    console.log(recipeToSave)
    if(recipeToSave._id && recipeToSave._id!=undefined && recipeToSave._id !="0" && this.recipe_id != 0){
      this.recipeService.updateRecipe(recipeToSave)
        .subscribe({
          next: (v) => {
            this.toastr.success("Recipe Updated Successfully", 'Success', {
              timeOut: 3000,
              positionClass:'toast-bottom-right' 
            });
            this.newItemSavedEvent.emit(true);
          },
          error: (e) => {
            this.toastr.error(e.error.message, 'Error', {
              timeOut: 3000,
              positionClass:'toast-bottom-right' 
            });
          }
      });
    }else{
        this.recipeService.createRecipe(recipeToSave)
        .subscribe({
          next: (v) => {
            this.toastr.success("Recipe Added Successfully", 'Success', {
              timeOut: 3000,
              positionClass:'toast-bottom-right' 
            });
            this.newItemSavedEvent.emit(true);
          },
          error: (e) => {
            this.toastr.error(e.error.message, 'Error', {
              timeOut: 3000,
              positionClass:'toast-bottom-right' 
            });
          }
      });
    }
  }
  addIngredient(){
    this.recipe.ingredients.push(new Ingredients);
  }
  addDirection(){
    this.recipe.directions.push(new String());
  }

  closeModal(){
    this.closeModalEvent.emit(true);
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