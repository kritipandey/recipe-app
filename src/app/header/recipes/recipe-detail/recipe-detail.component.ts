import { Component, Input } from '@angular/core';
import { RecipeService } from '../receipe.service';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
    @Input() recipe: Recipe;

    constructor(private receipeservice: RecipeService) {}

    addIngredientsToShoppingList(){
        this.receipeservice.onAddIngredientsToSL(this.recipe.ingredients);
    }

}