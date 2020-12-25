import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private igSubChanged:Subscription;

    constructor(private sLService: ShoppingListService) {}

    ngOnInit(){
        this.ingredients = this.sLService.getIngredients();
        this.igSubChanged = this.sLService.ingredientsChanged
        .subscribe(
            (ingredients: Ingredient[])=> {
                this.ingredients = ingredients;
            }
        );
    }

    ngOnDestroy(){
        this.igSubChanged.unsubscribe();
    }

    onEditItem(index: number){
        this.sLService.startedEditing.next(index);
    }
}