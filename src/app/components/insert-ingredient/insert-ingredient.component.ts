import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/Models/Recipe';
import { LoginService } from 'src/app/services/loginService.service';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-insert-ingredient',
  templateUrl: './insert-ingredient.component.html',
  styleUrls: ['./insert-ingredient.component.css'],
})
export class InsertIngredientComponent {
  //define the FormGroup and include form Array in FormGroup

  addNewRecipeForm = this.fb.group({
    name: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    ingredient: new FormArray([
      this.fb.group({
        name: new FormControl(''),
        weight: new FormControl(''),
        calories: new FormControl(''),
      }),
    ]),
    step: new FormArray([
      this.fb.group({
        comment: new FormControl(''),
      }),
    ]),
  });

  constructor(
    public loginService: LoginService,
    public recipeService: RecipeServiceService,
    private fb: FormBuilder
  ) {}

  //get will return the form array
  get ingredient(): FormArray {
    return this.addNewRecipeForm.get('ingredient') as FormArray;
  }

  get step(): FormArray {
    return this.addNewRecipeForm.get('step') as FormArray;
  }
  //define the function
  recipeSave() {
    console.log(this.addNewRecipeForm.value);
  //   const name = this.addNewRecipeForm.get('name').value;
  // const url = this.addNewRecipeForm.get('url').value;
  // const ingredient = this.addNewRecipeForm.get('ingredient').value;
  // const step = this.addNewRecipeForm.get('step').value;
  //     this.recipeService.createNewRecipe(name,url,ingredient,step).subscribe({
  //       next: (val: Recipe) => {
  //         alert('Recipe added successfully');
  //       },
  //       error: (err: any) => {
  //         console.error(err);
  //       },
  //     });
    }
  

  
  //define the function

  addNewIngredients() {
    let ingredientArry = this.addNewRecipeForm.get('ingredient') as FormArray;
    let newIngredient = this.fb.group({
      name: '',
      weight: '',
      calories: '',
    });

    ingredientArry.push(newIngredient);
  }
  //define the function
  AddnewSteps() {
    let stepArray = this.addNewRecipeForm.get('step') as FormArray;
    let newStep = this.fb.group({
      comment: '',
    });
    stepArray.push(newStep);
  }

  //define newIngredient array and newStep array

  //defining a simple form Array
  // IngredientFormArray = new FormArray([
  //   new FormControl(''),
  //   new FormControl(''),
  //   new FormControl(''),
  // ]);
  // stepFormArray = new FormArray([new FormControl('')]);

  //  ingredient: new FormArray([
  //     this.fb.group({
  //     name: new FormControl(''),
  //     weight: new FormControl(''),
  //     calories: new FormControl(''),
  //     })

  //   ]),
}
