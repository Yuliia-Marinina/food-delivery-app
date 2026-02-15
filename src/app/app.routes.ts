import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    title: 'Food Delivery App',
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Home',
      },
    ],
  },
];
