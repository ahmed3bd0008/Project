import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../Shared/model/ingredient';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
 ingredients !:Ingredient[];
 ingredient !:Ingredient;
 editRecipeNumb!:number;
 ingredientsSub!:Subscription;
//  =[
//    {name:'Tomatom',amount:10},
//    {name:'cake',amount:10}
//   ]
  constructor(private shopeservice:ShoppingService) {

   }
  ngOnDestroy(): void {
    this.ingredientsSub.unsubscribe()
  }

  ngOnInit() {
    this.ingredients=this.shopeservice.getAllIngredient();
    this.ingredientsSub = this.subscribeObserve();
  }
  subscribeObserve(){
   return this.shopeservice.arrayEvent.pipe().subscribe((prame:Ingredient[])=> {
      this.ingredients=prame;
  })
}
  Onedit(index:number){
    this.shopeservice.updateEvent.next(index);
  }

}
