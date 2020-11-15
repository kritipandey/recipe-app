import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] =  [
        new Recipe('Peppy Paneer', 
        'Paneer with crisp capsicum and spicy red pepper.', 
        'https://www.dominos.co.in/files/items/Peppy_Paneer.jpg',
        [
            new Ingredient ('Paneer', 12),
            new Ingredient ('Capsicum', 1)
        ]),
        new Recipe('Pani Puri', 
        'Panipuri or Golgappa - quite a mouthful!', 
        'https://st2.depositphotos.com/5653638/11508/i/950/depositphotos_115083696-stock-photo-pani-puri-or-panipuri-golgappe.jpg',
        [
            new Ingredient ('Puri', 10),
            new Ingredient ('Kala chana', 15)
        ])
    ];

    constructor(private sLService: ShoppingListService){}
 
    // below method will return the copy of array as original array can't be directly accessed

    getRecipes(){
        return this.recipes.slice();
    }

    onAddIngredientsToSL(ingredients: Ingredient[]){
        this.sLService.addingIngredients(ingredients);
    }
}