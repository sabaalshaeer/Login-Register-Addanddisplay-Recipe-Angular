import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Recipe, Step } from 'src/app/Models/Recipe';
import { LoginService } from 'src/app/services/loginService.service';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-insert-recipe',
  templateUrl: './insert-recipe.component.html',
  styleUrls: ['./insert-recipe.component.css'],
})
export class InsertRecipeComponent {
  addNewRecipeForm: FormGroup;

  recipe : Recipe[];
  public  userId = this.loginService.getUserId();


  constructor(
    public loginService: LoginService,
    public recipeService: RecipeServiceService,
    private fb: FormBuilder
  ) {
    this.addNewRecipeForm = this.fb.group({
    name: ['', Validators.required],
    url: [''],
    ingredient: this.fb.array([this.createIngredient()]),
    step: this.fb.array([this.createStep()])
  });
  // this.recipe = [];
}

  createIngredient(): FormGroup {
    return this.fb.group({
      ingredientName: ['', Validators.required],
      weight: [0, Validators.required],
      calories: [0, Validators.required]
    });
  }

  createStep(): FormGroup {
    return this.fb.group({
      comment: ['', Validators.required]
    });
  }


  addNewIngredients() {
    let ingredientArray = this.addNewRecipeForm.get('ingredient') as FormArray;
    // ingredientArray.push(this.createIngredient());
    let newIngredient = this.fb.group({
      ingredientName: '',
      weight: '',
      calories: '',
    });

    ingredientArray.push(newIngredient);
  }
  //define the function
  AddnewSteps() {
    let stepArray = this.addNewRecipeForm.get('step') as FormArray;
    // stepArray.push(this.createStep());
    let newStep = this.fb.group({
      comment: '',
    });
    stepArray.push(newStep);
  }

  removeIngredient(i) {
    const ingredientArray = this.addNewRecipeForm.get('ingredient') as FormArray;
    ingredientArray.removeAt(i);
  }

  removeStep(i) {
    const stepArray = this.addNewRecipeForm.get('step') as FormArray;
    stepArray.removeAt(i);
  }


  //define the function
  recipeSave() {
    console.log(this.userId);
    const recipe = {
      name: this.addNewRecipeForm.get('name').value,
      url: this.addNewRecipeForm.get('url').value,
      ingredient: this.addNewRecipeForm.get('ingredient').value.map(ing => ({
        ingredientName: ing.ingredientName,
        weight: ing.weight,
        calories: ing.calories
      })),
      step: this.addNewRecipeForm.get('step').value.map(step => ({
        comment: step.comment
      })),
      userId: this.loginService.getUserId()
    };

    // check that userId is defined before calling toString()
  // const userIdString = this.userId !== undefined ? this.userId.toString() : '';

    this.recipeService.createRecipeForUser(recipe).subscribe({
      next: (recipe) => {
        this.addNewRecipeForm.reset();
        console.log('Recipe added successfully!');
        console.log(recipe);
      },
      error: (error) => {
        console.log(error);
      }});


  }



}
