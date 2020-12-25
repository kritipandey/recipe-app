import { NgModule } from '@angular/core';
import { dropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    dropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    dropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    CommonModule
  ]
})
export class SharedModule { }

// CommonModule contains ngIf and ngFor directives.