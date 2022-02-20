import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EditRecipeComponent } from './recipes/EditRecipe/EditRecipe.component';
import { NewRecipeComponent } from './recipes/NewRecipe/NewRecipe.component';
import { RecipeDetailsComponent } from './recipes/recipeDetails/recipeDetails.component';
import { RecipesComponent } from './recipes/recipes.component';
import { StartComponent } from './recipes/start/start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SendMessageEmailsComponent } from './TestComponent/sendEmails/Send-message-emails/Send-message-emails.component';
import { SendEmailsComponent } from './TestComponent/sendEmails/sendEmails.component';
//must order the route
const routes: Routes = [
  {path:'',redirectTo:'/repices',pathMatch:'full'},
  {path:'repices',component:RecipesComponent,children:[
    {path:'',component:StartComponent},
    {path:'newRecipe',component:NewRecipeComponent},
    {path:':id',component:RecipeDetailsComponent},
    {path:':id/editRecipe',component:EditRecipeComponent},
  ]},
  {path:'shop-list',component:ShoppingListComponent},
  {path:'auth',component:AuthComponent},
  {path:'sendemail',component:SendEmailsComponent},
  {path:'SendMessage',component:SendMessageEmailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
