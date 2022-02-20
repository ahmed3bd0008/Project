import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule,NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgbCarouselComponent } from './TestComponent/ngb-carousel/ngb-carousel.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipeDetails/recipeDetails.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ViewChildComponent } from './TestComponent/ViewChild/ViewChild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRecipeComponent } from './recipes/EditRecipe/EditRecipe.component';
import { NewRecipeComponent } from './recipes/NewRecipe/NewRecipe.component';
import { HttpClientFireBaseComponent } from './TestComponent/HttpClientFireBase/HttpClientFireBase.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptorService } from './TestComponent/HttpClientFireBase/auth-interceptor.service';
import { LogEnterceptorService } from './TestComponent/HttpClientFireBase/log-enterceptor.service';
import { AuthComponent } from './auth/auth.component';
import { PipeComponent } from './TestComponent/pipe/pipe.component';
import { ShortStringpipeService } from './TestComponent/pipe/ShortString.pipe.service';
import { SendEmailsModule } from './TestComponent/sendEmails/sendEmails.module';


@NgModule({
  declarations: [
    ShortStringpipeService,
      AppComponent,
      HeaderComponent,
      RecipesComponent,
      ShoppingListComponent,
      ShoppingEditComponent,
      RecipeItemComponent,
      EditRecipeComponent,
      NewRecipeComponent,
      RecipeDetailsComponent,
      RecipeListComponent,
      RecipeItemComponent,
      NgbCarouselComponent,
      ViewChildComponent,
      HttpClientFireBaseComponent,
     AuthComponent,
     PipeComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
   SendEmailsModule

  ],
  providers: [
                {
                  provide:HTTP_INTERCEPTORS,
                  useClass:AuthInterceptorService,
                  multi:true
                },
                {
                  provide:HTTP_INTERCEPTORS,
                  useClass:LogEnterceptorService,
                  multi:true,
                }
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
