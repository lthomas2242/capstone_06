import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe';
import { RecipeService } from 'src/app/_services/recipe.service';

@Component({
  selector: 'app-recipe-data-list',
  templateUrl: './recipe-data-list.component.html',
  styleUrls: ['./recipe-data-list.component.css']
})
export class RecipeDataListComponent implements OnInit,OnChanges {

  @Input() recipes :any;
  current_page: number = 1;
  count: number = 5;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
  }




}
