import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../receipe.service';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;

    constructor(private receipeservice: RecipeService, private route: ActivatedRoute,
        private router: Router) {}

    ngOnInit(){
        this.route.params
        .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.receipeservice.getRecipe(this.id);
            }
        );
    }

    addIngredientsToShoppingList(){
        this.receipeservice.onAddIngredientsToSL(this.recipe.ingredients);
    }

    onEditRecipe(){
        this.router.navigate(['edit'], {relativeTo: this.route});
    }

    onDeleteRecipe(){
        this.receipeservice.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }
}


// params is a observable