import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

constructor(private http:HttpClient,private recipeService:RecipeService) { }
postdata(){
  const recipes=this.recipeService.getRecipe();
  console.log(recipes)
  return this.http.put('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json',recipes)
}
getDataFromFireBase(){
  return this.http.get<Recipe[]>('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json')
}
}
