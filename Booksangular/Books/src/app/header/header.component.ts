import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { SharedService } from '../Shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  constructor(private sharedService:SharedService,private recipeService:RecipeService) { }

  ngOnInit() {
  }
  saveDate(){
    this.sharedService.postdata().subscribe(response=>{
      console.log(response)
    });
  }
  getDate(){
    this.sharedService.getDataFromFireBase().subscribe((Response)=>{
    this.recipeService.setRecipe(Response)
    })
  }
}
