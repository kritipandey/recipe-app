import { Component, ElementRef, Output, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-edit-shopping-list',
    templateUrl: './edit-shopping-list.component.html',
    styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {
    @ViewChild('nameInput', {static:false}) nameInputRef: ElementRef;
    @ViewChild('amountInput', {static:false}) amountInputRef: ElementRef;

    constructor(private sLService: ShoppingListService) {}

    ngOnInit(){
    }

    onAdd(){
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmount);
        this.sLService.addIngredients(newIngredient);
    }   
}