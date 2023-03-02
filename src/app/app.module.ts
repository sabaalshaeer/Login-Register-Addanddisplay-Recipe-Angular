import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { UserHomeComponent } from './components/user-home/user-home.component';
import { DisplayRecipeComponent } from './components/display-recipe/display-recipe.component';
import { InsertRecipeComponent } from './components/insert-recipe/insert-recipe.component';
import { InsertIngredientComponent } from './components/insert-ingredient/insert-ingredient.component';
import { PantryItemComponent } from './components/pantry-item/pantry-item.component';
import { ItemsComponent } from './components/items/items.component';
import { DisplayItemsComponent } from './components/display-items/display-items.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    DisplayRecipeComponent,
    InsertRecipeComponent,
    InsertIngredientComponent,
    PantryItemComponent,
    ItemsComponent,
    DisplayItemsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
