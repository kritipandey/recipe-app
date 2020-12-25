import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] =  [
        new Recipe('Peppy Paneer', 
        'Paneer with crisp capsicum and spicy red pepper.',
        // 'https://www.dominos.co.in/files/items/Peppy_Paneer.jpg',
        '../assets/Peppy_Paneer.jpg',
        [
            new Ingredient ('Capsicum', 1),
            new Ingredient ('Paneer Cubes', 12)
        ]), 
    ];

    constructor(private sLService: ShoppingListService){}
 
    // below method will return the copy of array as original array can't be directly accessed

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index]
    }

    onAddIngredientsToSL(ingredients: Ingredient[]){
        this.sLService.addingIngredients(ingredients);
    }

    addNewRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

    setFetchRecipes(recipes: Recipe[]){
        this.recipes = recipes;                // this.recipes means above reccipes will override with the recipes we are getting.
        this.recipeChanged.next(this.recipes.slice());
    }
}