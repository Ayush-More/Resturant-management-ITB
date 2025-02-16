import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './features/employee/employee.module';
import { FinanceModule } from './features/finance/finance.module';
import { InventoryModule } from './features/inventory/inventory.module';
import { MenuModule } from './features/menu/menu.module';
import { BillingPaymentModule } from './features/billing-payment/billing-payment.module';
import { FeedbackOrderModule } from './features/feedback-order/feedback-order.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    EmployeeModule,
    FinanceModule,
    InventoryModule ,
    MenuModule,
    BillingPaymentModule,
    FeedbackOrderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
