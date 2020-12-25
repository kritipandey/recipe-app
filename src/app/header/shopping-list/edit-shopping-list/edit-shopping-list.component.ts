import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-edit-shopping-list',
    templateUrl: './edit-shopping-list.component.html',
    styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit, OnDestroy {
    @ViewChild('f', {static:false}) sLForm: NgForm;
    editItemSubscription: Subscription;
    editMode = false;
    editedItemIndex: number;
    editedItem: Ingredient;

    constructor(private sLService: ShoppingListService) {}

    ngOnInit(){
        this.editItemSubscription = this.sLService.startedEditing.
        subscribe(
            (index: number) => {
                this.editedItemIndex = index;
                this.editMode = true;
                this.editedItem = this.sLService.getIngredient(index);
                this.sLForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                })
            }
        );
    }

    onSubmit(form: NgForm){
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);           
        if(this.editMode){ 
            this.sLService.updateItem(this.editedItemIndex, newIngredient);
        }
        else{
            this.sLService.addIngredients(newIngredient)
        };
        this.editMode = false;
        this.sLForm.reset();
    }   

    onClear(){
        this.sLForm.reset();
        this.editMode = false;
    }

    onDelete(){
        this.sLService.deleteItem(this.editedItemIndex);
        this.onClear();
    }

    ngOnDestroy(){
        this.editItemSubscription.unsubscribe();
    }
}