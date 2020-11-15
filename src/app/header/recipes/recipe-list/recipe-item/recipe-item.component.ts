import { Component, Input } from '@angular/core';
import { RecipeService } from '../../receipe.service';
import { Recipe } from '../../recipe.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
    @Input() recipe: Recipe;

    constructor(private recipeservice: RecipeService) {}

    onSelected(){
        this.recipeservice.recipeSelected.emit(this.recipe);
    }
}