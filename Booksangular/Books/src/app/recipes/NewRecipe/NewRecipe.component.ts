import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-NewRecipe',
  templateUrl: './NewRecipe.component.html',
  styleUrls: ['./NewRecipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  AddRecipeForm!:FormGroup;
  formIngredients!:FormArray;
  constructor(private recipeServ:RecipeService,
              private router:Router,
              private activeRouter:ActivatedRoute) { }

  ngOnInit() {
    this.fullArrayGroup()
    this.fullForm()
  }
  fullForm(){

    this.AddRecipeForm=new FormGroup({
      name:new FormControl(null,[Validators.required]),
      desc:new FormControl(null,[]),
      imagePath:new FormControl(null,[Validators.required]),
      ingredients:this.formIngredients
    })
  }
  fullArrayGroup(){
    this.formIngredients=new FormArray([]);
    this.formIngredients.push(
                            new FormGroup({
                              name:new FormControl(),
                              amount:new FormControl(),
                            }))
  }
  deleteIngredient(index:number){
    (<FormArray>this.AddRecipeForm.get('ingredients')).removeAt(index)
  }
  addIngredient(){
    (<FormArray>this.AddRecipeForm.get('ingredients')).push( new FormGroup({
      name:new FormControl(),
      amount:new FormControl(),
    }))
  }
  addFormControlIngredient(){
    (<FormArray>this.AddRecipeForm.get('ingredients')).push(
      new FormGroup({
        name:new FormControl(null,[Validators.required]),
        amount:new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
      )}
  get Control(){
       return (<FormArray> this.AddRecipeForm.get('ingredients')).controls;
      }
      backPreviousePage(){
        this.router.navigate(['../'],{relativeTo:this.activeRouter})
      }
  onSubmite(){
    console.log(this.AddRecipeForm.value);
    if(this.AddRecipeForm.valid){
      this.recipeServ.addRecipe(
                                {name:this.AddRecipeForm.value.name,
                                  imagePath:this.AddRecipeForm.value.imagePath,
                                  discription:this.AddRecipeForm.value.desc,
                                  ingredient:this.AddRecipeForm.value.ingredients})
      this.backPreviousePage()
    }
  }

}
