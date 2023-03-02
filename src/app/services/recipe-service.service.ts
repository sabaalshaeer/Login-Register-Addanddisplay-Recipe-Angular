import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Ingredient, Recipe, Step } from '../Models/Recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeServiceService {
  public recipes: Recipe[] = [];

  constructor(private http: HttpClient) {}


  public createRecipeForUser(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`http://localhost:3000/recipes`, recipe);
  }

  // public createRecipeForUserId(recipe: Recipe): Observable<Recipe> {
  //   return this.http.post<Recipe>(`http://localhost:3000/recipes`,
  //     recipe
  //   );
  // }

  public getRecipesByUserId(userId: number): Observable<Recipe[]> {
    console.log(' recipes for user ID:', userId); // check if a request is made
    return this.http.get<Recipe[]>(`http://localhost:3000/recipes?userId=${userId}`);
  }


  public getRecipes(recipes : Recipe[]): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }




  //post recipe with BE DotNet
 // public createRecipe(recipe: Recipe) {
  //  return this.http.post<Recipe>('https://example.com/api/recipes', recipe);
 // }


  //Get REcipes from BE DotNet
  // public getRecipeList(id: number): Observable<Recipe[]> {
  //   return this.http.get<Recipe[]>(
  //     `https://localhost:7004/api/Recipes?userId=${id}`
  //   );
  // }




}
