import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faTachometerAlt,
  faClipboardList,
  faUtensils,
  faBoxes,
  faUsers,
  faTruck,
  faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, CommonModule]
})
export class SidebarComponent {
  dashboardIcon = faTachometerAlt;
  ordersIcon = faClipboardList;
  menuIcon = faUtensils;
  inventoryIcon = faBoxes;
  employeesIcon = faUsers;
  deliveryIcon = faTruck;
  financeIcon = faMoneyBillWave;

  menuItems = [
    { name: 'Dashboard', icon: this.dashboardIcon, route: '/dashboard', notification: 3 },
    { name: 'Orders', icon: this.ordersIcon, route: '/orders', notification: 12 },
    { name: 'Menu', icon: this.menuIcon, route: '/menu', notification: 0 },
    { name: 'Inventory', icon: this.inventoryIcon, route: '/inventory', notification: 2 },
    { name: 'Employees', icon: this.employeesIcon, route: '/employees', notification: 0 },
    { name: 'Delivery', icon: this.deliveryIcon, route: '/delivery', notification: 5 },
    { name: 'Finance', icon: this.financeIcon, route: '/finance', notification: 0 }
  ];
}