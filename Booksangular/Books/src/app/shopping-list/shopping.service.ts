import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../Shared/model/ingredient';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
constructor() { }
ingredients :Ingredient[]=[
  {name:'Tomatom',amount:10},
  {name:'cake',amount:10}
 ]
 public arrayEvent=new Subject<Ingredient[]>();
 public updateEvent=new Subject<number>();
 getAllIngredient(){
  //return this.ingredients.slice; lice while return cope of array when add orignal  will add bt we return the cope
  return this.ingredients.slice();
 }
 addIngredient(ingredient:Ingredient){
   console.log(ingredient)
   this.ingredients.push(ingredient);
   this.arrayEvent.next(this.ingredients.slice())
 }
 addIngredientFromRecipe(ingredients:Ingredient[]){
   this.ingredients.push(...ingredients);

 }
getIngredientByIndex(index:number){
 return this.ingredients[index];
}
updateIngredient(index:number,ingredient:Ingredient){
 this.ingredients[index]=ingredient
 this.arrayEvent.next(this.ingredients.slice());
}
deleteIngredient(Index:number){
  this.ingredients.splice(Index,1);
  this.arrayEvent.next(this.ingredients.slice());
}
}
