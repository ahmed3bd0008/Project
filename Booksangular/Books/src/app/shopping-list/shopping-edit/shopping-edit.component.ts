import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/Shared/model/ingredient';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  subscribtionUpdateEvent!:Subscription;
  ingredientGroup !:FormGroup;
  ingredient !:Ingredient;
  indexOfEdit !:number;
  editMode:Boolean=false;
  constructor(private shopservice:ShoppingService) { }
  ngOnDestroy(): void {
    this.subscribtionUpdateEvent.unsubscribe();
  }

  ngOnInit() {
    this.ingredientGroup=new FormGroup({
      name:new FormControl(null,[Validators.required]),
      amount:new FormControl(null,[Validators.required, Validators.pattern("^[0-9]*$"),])
    }
    )
   this.subscribtionUpdateEvent= this.shopservice.updateEvent.subscribe((index:number)=>{
       this.ingredient=this.shopservice.getIngredientByIndex(index);
      if(this.ingredient)
      {
        this.indexOfEdit=index;
        this.ingredientGroup.patchValue({name:this.ingredient.name});
        this.ingredientGroup.patchValue({amount:this.ingredient.amount});
        this.editMode=true;
      }
    })
  }
  onSubmite(){
   if(!this.editMode){
     if(this.ingredientGroup.valid){
      const ingrdent:Ingredient={name:this.ingredientGroup.value.name,amount:this.ingredientGroup.value.amount}
       this.shopservice.addIngredient(ingrdent)

     }
   }
   else{
    this.shopservice.updateIngredient(this.indexOfEdit,{name:this.ingredientGroup.value.name,amount:this.ingredientGroup.value.amount})
   }
  }
  DeleteIngredient(){
    this.shopservice.deleteIngredient(this.indexOfEdit);
  }

}
