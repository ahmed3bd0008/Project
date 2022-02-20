import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectRecipe !:Recipe;
  constructor(private recipeservice:RecipeService) { }

  ngOnInit() {

    this.recipeservice.recipeEventDetails.subscribe((recipe:Recipe)=>{
      this.selectRecipe=recipe
    })
  }
  selectRecipeF(recipe:Recipe){
   this.selectRecipe=recipe
  }
}
