import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Form } from './pages/form/form';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
  },{
    path: 'form',
    component: Form,
  }
];
