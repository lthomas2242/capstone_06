import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredients, Nutritions, Recipe } from 'src/app/_models/recipe';
import { RecipeService } from 'src/app/_services/recipe.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  public recipe = new Recipe();

  constructor(private recipeService : RecipeService,
    public router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.recipe.ingredients =  [];
    this.recipe.nutritions = new Nutritions();
    this.recipe.directions=[];
  }

  saveRecipe(recipeToSave : Recipe){
    // if(recipeToSave._id && recipeToSave._id!=undefined && recipeToSave._id !="0" && this.recipe_id != 0){
    //   this.recipeService.updateRecipe(recipeToSave)
    //     .subscribe({
    //       next: (v) => {
    //         this.toastr.success("Recipe Updated Successfully", 'Success', {
    //           timeOut: 3000,
    //           positionClass:'toast-bottom-right' 
    //         });

    //       },
    //       error: (e) => {
    //         this.toastr.error(e.error.message, 'Error', {
    //           timeOut: 3000,
    //           positionClass:'toast-bottom-right' 
    //         });
    //       }
    //   });
    // }else{

      let isLoggedIn = localStorage.getItem("isLoggedIn");
   
      if (isLoggedIn == "true") {
       
        recipeToSave.user_id = localStorage.getItem("id");
        recipeToSave.approved = 0;
        console.log("dt", recipeToSave);
        this.recipeService.createRecipe(recipeToSave)
        .subscribe({
          next: (v) => {
            this.toastr.success("Recipe Added Successfully", 'Success', {
              timeOut: 3000,
              positionClass:'toast-top-right' 
            });
          
          },
          error: (e) => {
            this.toastr.error(e.error.message, 'Error', {
              timeOut: 3000,
              positionClass:'toast-top-right' 
            });
          }
      });

      } else {
        this.toastr.error("User not logged in", 'Error', {
          timeOut: 3000,
          positionClass:'toast-top-right' 
        });
      } 


    // }
  }

  addIngredient(){
    this.recipe.ingredients.push(new Ingredients);
  }
  addDirection(){
    this.recipe.directions.push(new String());
  }

}


