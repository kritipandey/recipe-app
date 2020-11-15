import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './receipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
    providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
    onRecipeWasSelected:Recipe;
    
    constructor(private receipeservice: RecipeService) {    
    }

    ngOnInit(){
        this.receipeservice.recipeSelected
        .subscribe(
            (recipe: Recipe) => {
                this.onRecipeWasSelected = recipe;
            }
        );
    }
}

// we have subscribed on recipeSelected so that we are informed on any change.