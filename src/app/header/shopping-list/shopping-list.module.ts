import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EditShoppingListComponent } from './edit-shopping-list/edit-shopping-list.component';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    EditShoppingListComponent
  ],
  imports: [
    SharedModule,
    FormsModule, 
    RouterModule.forChild([
      {path: '', component: ShoppingListComponent}
    ])
  ]
})
export class ShoppingListModule { }