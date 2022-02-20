import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe={name:'',discription:'',imagePath:'',ingredient:[{name:'',amount:0}]}
 // @Output() selectRecipe=new EventEmitter<void>()
  constructor(private recipeservice:RecipeService) { }
  @Input() index!:number;
  ngOnInit() {
  }

  // onSelect() {
  //   this.selectRecipe.emit();
  // }
  onSelect(){
    //alert(this.recipe.name);
    this.recipeservice.recipeEventDetails.next(this.recipe);
  }

}
