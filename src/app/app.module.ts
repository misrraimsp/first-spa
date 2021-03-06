import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseContainerComponent } from './expense-container/expense-container.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BalanceComponent } from './balance/balance.component';
import { TransferComponent } from './transfer/transfer.component';
import { ExpenseComponent } from './expense/expense.component';
import { BalanceContainerComponent } from './balance-container/balance-container.component';
import { TransferContainerComponent } from './transfer-container/transfer-container.component';
import { AddFriendFormComponent } from './add-friend-form/add-friend-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddExpenseFormComponent } from './add-expense-form/add-expense-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseContainerComponent,
    NavbarComponent,
    BalanceComponent,
    TransferComponent,
    ExpenseComponent,
    BalanceContainerComponent,
    TransferContainerComponent,
    AddFriendFormComponent,
    AddExpenseFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
