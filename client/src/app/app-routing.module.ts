import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect to Dashboard
  // { path: 'dashboard', loadChildren: () => import('./core/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'employees', loadChildren: () => import('./features/employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'finance', loadChildren: () => import('./features/finance/finance.module').then(m => m.FinanceModule) },
  { path: 'inventory', loadChildren: () => import('./features/inventory/inventory.module').then(m => m.InventoryModule) },
  { path: 'menu', loadChildren: () => import('./features/menu/menu.module').then(m => m.MenuModule) },
  { path: 'billing', loadChildren: () => import('./features/billing-payment/billing-payment.module').then(m => m.BillingPaymentModule) },
  { path: 'feedback', loadChildren: () => import('./features/feedback-order/feedback-order.module').then(m => m.FeedbackOrderModule) },
  { path: '**', redirectTo: 'dashboard' } // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
