import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ShoppingListService } from './header/shopping-list/shopping-list.service';
import { RecipeService } from './header/recipes/receipe.service';
import { AuthInterceptorService } from './auth/auth-interceptors.service';

@NgModule({
providers: [ShoppingListService, 
    RecipeService, 
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
    }]
})
export class CoreModule { }