import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';
import { RecipeService } from 'src/app/_services/recipe.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-recipe',
  templateUrl: './my-recipe.component.html',
  styleUrls: ['./my-recipe.component.css']
})
export class MyRecipeComponent implements OnInit {
  public recipes : Recipe[] = [];
  constructor(private recipeService : RecipeService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes(){
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let userid = localStorage.getItem("id");
    
    this.recipeService.getMyRecipes(userid)
      .subscribe({
        next: (v) => {
          this.recipes = v;

          console.log(v);
        },
    });
  }

  deleteRecipe(recipeId: String) {
    this.recipeService.deleteRecipe(recipeId)
        .subscribe({
          next: (v) => {
            this.getAllRecipes();
            this.toastr.success("Recipe Deleted Successfully", 'Success', {
              timeOut: 3000,
              positionClass:'toast-top-right' 
            });
          }
        });
  
  }


}
