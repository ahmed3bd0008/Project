import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../Shared/model/ingredient';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe';
//why use this make instance of service when use each time  كل مره اغير فيها ال الروت root
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes:Recipe[]=[
    {name:"ahmed",discription:"new field",imagePath:"https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg",
    ingredient:[{name:'meta',amount:2}]},
    {name:"ali",discription:"new field",imagePath:"https://www.spoonforkbacon.com/wp-content/uploads/2021/02/dinner-recipes-688x916.jpg",
    ingredient:[{name:'tomatem',amount:1},{name:'fol',amount:1}]},
    {name:"hosam",discription:"new field",imagePath:"https://www.bing.com/th?id=AMMS_f39f945bd5e52d9cf88a9f562a73a10d&w=406&h=305&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1",
    ingredient:[{name:'ice',amount:10}]},
  ]
  recipeEventDetails=new Subject<Recipe>();
  recipeEventChange=new Subject<Recipe[]>();
constructor(private shopService:ShoppingService) { }
 getRecipe(){
   //slice Git Cope Of array if not have  prameter
   //if have prameter
   return this.recipes.slice();
 }
 addingredentToShop(ingredient :Ingredient[]){
   this.shopService.addIngredientFromRecipe(ingredient)
 }
 getrecipeByIndex(index:number){
  return this.recipes[index]
 }
 addRecipe(recipe:Recipe){
   recipe.ingredient?recipe.ingredient:[];
   this.recipes.push(recipe)
   this.recipeEventChange.next(this.recipes)
 }
 EditRecipe(index:number,recipe:Recipe){
  this.recipes[index]=recipe;
  this.recipeEventChange.next(this.recipes)
 }
 deleteRecipe(index:number){
  this.recipes.splice(index,1);
  this.recipeEventChange.next(this.recipes)
 }
 setRecipe(recipes:Recipe[]){
   this.recipes=recipes;
   this.recipeEventChange.next(this.recipes)
 }
}
