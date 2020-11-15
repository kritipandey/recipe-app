import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../receipe.service';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    // Injecting recipe Service
    constructor(private recipeservice: RecipeService) {}

    ngOnInit(){
        this.recipes = this.recipeservice.getRecipes();
    }
}