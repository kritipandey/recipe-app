import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuardService } from "src/app/auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeResolverService } from "./recipe-resolver.service";
import { RecipesComponent } from "./recipes.component";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";

const appRoutes:Routes = [
{path: '', component: RecipesComponent, canActivate: [AuthGuardService], children: [
    {path: '', component: SelectRecipeComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
]},
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class RecipesRoutingModule{}