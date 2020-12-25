import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from 'rxjs/operators';
import { RecipeService } from "../header/recipes/receipe.service";
import { Recipe } from "../header/recipes/recipe.model";

@Injectable({providedIn: 'root'})

export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService){}

    storeRecipes(){
        const recipe= this.recipeService.getRecipes();
        this.http
        .put('https://angular-project-730cb-default-rtdb.firebaseio.com/recipes.json', recipe)
        .subscribe(responseData => {
            console.log(responseData);
        })

    }

    // To fetch recipes, if we are not authorized:-
    fetchRecipes(){
        return this.http.get<Recipe[]>('https://angular-project-730cb-default-rtdb.firebaseio.com/recipes.json')
        .pipe(
        map(recipes => {
            return recipes.map(recipe =>{
                return {...recipe,
                    ingredients: recipe.ingredients? recipe.ingredients : []
                };
            });
        }),
        tap(recipes => {
            this.recipeService.setFetchRecipes(recipes);
        }));
    }
}