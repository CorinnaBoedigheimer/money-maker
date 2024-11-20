import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OverviewTransactionsComponent } from './components/overview-transactions/overview-transactions.component';
import { OverviewFixedCostsComponent } from './components/overview-fixed-costs/overview-fixed-costs.component';
import { OverviewAccountsComponent } from './components/overview-accounts/overview-accounts.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { FixedCostDetailsComponent } from './components/fixed-cost-details/fixed-cost-details.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { FixedCostFormComponent } from './components/fixed-cost-form/fixed-cost-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    OverviewTransactionsComponent,
    OverviewFixedCostsComponent,
    OverviewAccountsComponent,
    AccountDetailsComponent,
    FixedCostDetailsComponent,
    TransactionDetailsComponent,
    TransactionFormComponent,
    CategoryFormComponent,
    AccountFormComponent,
    FixedCostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
