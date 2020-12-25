import { NgModule } from '@angular/core';  // NgModule here used to transform normal ts class to a Angular module.
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', 
    loadChildren: () => import('../app/header/recipes/recipes.module').then(module => module.RecipesModule)},    // Lazy loading
  {
    path: 'shopping-list', 
    loadChildren: () => import('../app/header/shopping-list/shopping-list.module').then(module => module.ShoppingListModule)},
  {
    path: 'auth', 
    loadChildren: () => import('../app/auth/auth.module').then(module => module.AuthModule)}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule{}