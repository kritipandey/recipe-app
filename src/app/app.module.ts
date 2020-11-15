import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './basics/server/server.component';
import { ServersComponent } from './basics/servers/servers.component';
import { SuccessAlert } from './basics/successalert/successalert.component';
import { WarningAlert } from './basics/warningalert/warningalert.component';
import { AssignmentComponent } from './basics/assignment/assignment.component';
import { Assignment2Component } from './basics/assignment2/assignment2.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { EditShoppingListComponent } from './header/shopping-list/edit-shopping-list/edit-shopping-list.component';
import { RecipesComponent } from './header/recipes/recipes.component';
import { RecipeListComponent } from './header/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipes/recipe-detail/recipe-detail.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { OddEvenComponent } from './basics/directives-odd-even/odd-even.components';
import { CreateBasicAttributeDirective } from './create-basic-directive/create-basic-directive.directive';
import { CreateBetterDirectiveDirective } from './create-better-directive/create-better-directive.directive';
import { UnlessDirective } from './unless-directive';
import { dropdownDirective } from './shared/dropdown.directive';
import { ServicesStartComponent } from './services-start/services-start.component';
import { AccountComponent } from './services-start/account/account.component';
import { NewAccountComponent } from './services-start/new-account/new-account.component';
import { DataService } from './data.services';
import { LoggingService } from './logging.service';
import { ActiveUsersComponent } from './active-inactive-service/active-users/active-users.component';
import { InactiveUsersComponent } from './active-inactive-service/inactive-users/inactive-users.component';
import { CounterService } from './counter.service';
import { ActiveInactiveServiceComponent } from './active-inactive-service/active-inactive-service.component';
import { ShoppingListService } from './header/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlert,
    WarningAlert,
    AssignmentComponent,
    Assignment2Component,
    HeaderComponent,
    ShoppingListComponent,
    EditShoppingListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    CockpitComponent,
    ServerElementComponent,
    OddEvenComponent,
    CreateBasicAttributeDirective,
    CreateBetterDirectiveDirective,
    UnlessDirective,
    dropdownDirective,
    ServicesStartComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ActiveInactiveServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService, LoggingService, CounterService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }