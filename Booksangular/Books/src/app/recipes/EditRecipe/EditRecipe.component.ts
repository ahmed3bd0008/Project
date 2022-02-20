import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-EditRecipe',
  templateUrl: './EditRecipe.component.html',
  styleUrls: ['./EditRecipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  recipeId!:number;
  recipe!:Recipe;
  updateFormGroup!:FormGroup;
  ingredentForm=new FormArray([])
  constructor(private activeRouter:ActivatedRoute,
              private recipeServ:RecipeService,
              private router:Router) { }

  ngOnInit() {
    this.recipeId=   this.activeRouter.snapshot.params.id;
    this.recipe= this.recipeServ.getrecipeByIndex(this.recipeId);
    this.fullIngredient();
    this.fullForm();
  }
  fullForm(){
    this.updateFormGroup=new FormGroup({
      name:new FormControl(this.recipe.name,[Validators.required]),
      imagePath:new FormControl(this.recipe.imagePath,[Validators.required]),
      desc:new FormControl(this.recipe.discription,[Validators.required]),
      ingredients:  this.ingredentForm
    })
  }
  fullIngredient(){
    for (let ingridient  of this.recipe.ingredient) {
      this.ingredentForm.push(
            new FormGroup({
              name:new FormControl(ingridient.name,[Validators.required]),
              amount:new FormControl(ingridient.amount ,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
      )
    }
  }
 get controls() { // a getter!
  return (<FormArray>this.updateFormGroup.get('ingredients')).controls;
}

addFormControlIngredient(){
  (<FormArray>this.updateFormGroup.get('ingredients')).push(
    new FormGroup({
      name:new FormControl(null,[Validators.required]),
      amount:new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    })
  )
}
backpreviousePage(){
 this.router.navigate(['../'],{relativeTo:this.activeRouter});
}
deleteingredient(controll:number){
(<FormArray>this.updateFormGroup.get('ingredients')).removeAt(controll)
}
onSubmite(){

this.recipeServ.EditRecipe(this.recipeId,
  {name: this.updateFormGroup.value.name,
    imagePath:this.updateFormGroup.value.imagePath,
    discription:this.updateFormGroup.value.desc,
    ingredient:this.updateFormGroup.value.ingredients
  })
  this.backpreviousePage()
}
}
