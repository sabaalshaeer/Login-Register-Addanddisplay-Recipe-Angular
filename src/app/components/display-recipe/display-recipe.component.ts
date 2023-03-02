import { Component,  OnInit } from '@angular/core';
import { Ingredient, Recipe } from 'src/app/Models/Recipe';
import { LoginService } from 'src/app/services/loginService.service';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';


@Component({
  selector: 'app-display-recipe',
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css'],
})
export class DisplayRecipeComponent implements OnInit {
  //retrive the id from  a stored user object
  public recipes: Recipe[] = [];
  public recipe: Recipe;

  constructor(
    public loginService: LoginService,
    public recipeService: RecipeServiceService
  ) {}

  //lifecycle hook
  ngOnInit(): void {
      this.getRecipeList();
  }

  getRecipeList() {
      const userId = this.loginService.getUserId();
      console.log('User ID:', userId);
    this.recipeService.getRecipesByUserId(userId).subscribe({
      next: (recipes) => {
        this.recipes = recipes;
        console.log(recipes);
        this.recipe = recipes[0]; // assign the first recipe to the 'recipe' property


      },
    });
  }

  public getTotalCaloriesinEachRecipe(recipe: Recipe): number {
    let totalCalories = 0;
    if (recipe.ingredient) {
      recipe.ingredient.map((i: Ingredient) => {
        totalCalories += i.calories;

      });
    }
    return totalCalories;
  }

  public getTotalWeightinEachRecipe(recipe: Recipe): number {
    let totalWeight = 0;
    if (recipe.ingredient) {
      recipe.ingredient.map((i: Ingredient) => {
        totalWeight += i.weight;
      });
    }
    return totalWeight;
  }

  //  getRecipeList() {
  //     this.id = this.loginService.getUserId();
  //   this.recipeService.getRecipeList(this.recipes,this.id).subscribe({
  //     next: (recipes) => {
  //       this.recipes = recipes;
  //     },
  //   });
  // }

//   getIngredientList() {
//   this.recipeService.getIngredientList(this.ingredients).subscribe({
//     next: (ingredients) => {
//       this.ingredients = ingredients;
//     },
//   });
// }


  // public getTotalCaloriesinEachRecipe(recipe: Recipe): number {
  //   let totalCalories = 0;
  //   recipe.ingredient.map((i: Ingredient) => {
  //     totalCalories += i.calories;
  //   });
  //   return totalCalories;
  // }
  // public getTotalWeightinEachRecipe(recipe: Recipe): number {
  //   let totalWeight = 0;
  //   recipe.ingredient.map((i: Ingredient) => {
  //     totalWeight += i.weight;
  //   });
  //   return totalWeight;
  // }
}
