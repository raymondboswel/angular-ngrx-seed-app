import { GrowMyMoneyComponent } from './lib/grow-my-money/grow-my-money.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'grow-my-money',
    component: GrowMyMoneyComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'grow-my-money'
  }
];

export const appRoutingModule = RouterModule.forRoot(appRoutes, {
  useHash: true
});
