import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../receipe.service';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    recipes: Recipe[];
    recipeChangeSubscription: Subscription;

    // Injecting recipe Service
    constructor(private recipeservice: RecipeService, private router: Router, 
        private route: ActivatedRoute) {}

    ngOnInit(){
        this.recipeChangeSubscription = this.recipeservice.recipeChanged
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
            }
        )
        this.recipes = this.recipeservice.getRecipes();
    }

    onNewRecipe(){
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy(){
        this.recipeChangeSubscription.unsubscribe();
    }
}