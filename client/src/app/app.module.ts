// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MenuComponent } from './components/menu/menu.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { FinanceComponent } from './components/finance/finance.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    // Remove standalone components from declarations
    OrdersComponent,
    MenuComponent,
    InventoryComponent,
    EmployeesComponent,
    DeliveryComponent,
    FinanceComponent,
    // BreadcrumbComponent - removed
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    CommonModule,
    // Import standalone components here
    SidebarComponent,
    DashboardComponent,
    BreadcrumbComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }