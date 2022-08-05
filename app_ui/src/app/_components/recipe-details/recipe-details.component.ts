import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../_models/recipe';
import { RecipeService } from '../../_services/recipe.service';
import { Router } from '@angular/router'; 
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeid: any;
  recipeData!: Recipe;
  
  constructor( private route: ActivatedRoute, private router: Router, private RecipeService: RecipeService) {
    
   }


  ngOnInit(): void {
    this.recipeid = this.route.snapshot.params['recipeid']; 
    console.log(this.recipeid);
    
    this.route.params.pipe(
      switchMap((params: Params)=>{
        return this.RecipeService.getRecipeById(params['recipeid'])
      })      
    )
    .subscribe(recipeData =>{   
      
      this.recipeData = recipeData;  
      console.log("ddd", this.recipeData);
    });

    // .subscribe((recipeData: Recipe)=>{    
    //   this.recipeData = recipeData;  
    // })


  //   .subscribe({
  //     next: (v) => {
  //       console.log("ddd", v);
  //       this.recipeData = v;
  //     },
  // });

    
    // console.log("recipeee", this.recipeData);
    // 62eb7b02882875f10c531db6
  }

}
