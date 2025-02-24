// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './navegation/home/home.component';
// import { NotAllowedComponent } from './navegation/not-allowed/not-allowed.component';
// import { NotFoundComponent } from './navegation/not-found/not-found.component';
// import { CreateCategoryComponent } from './category/create-category/create-category.component';
// import { ListCategoryComponent } from './category/list-category/list-category.component';
// import { EditCategoryComponent } from './category/edit-category/edit-category.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   {
//     path: 'account',
//     loadChildren: () => import('./account/account.module')
//       .then(m => m.AccountModule)
//   },
//   {
//     path: 'budget',
//     loadChildren: () => import('./budget/budget.module')
//       .then(m => m.BudgetModule)
//   },
//   {
//     path: 'category',
//     loadChildren: () => import('./category/category.module')
//       .then(m => m.CategoryModule)
//   },
//   {
//     path: 'reports',
//     loadChildren: () => import('./reports/reports.module')
//       .then(m => m.ReportsModule)
//   },
//   {
//     path: 'financial-transaction',
//     loadChildren: () => import('./financial-transaction/financial-transaction.module')
//       .then(m => m.FinancialTransactionModule)
//   },
//   { path: 'not-allowed', component: NotAllowedComponent },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: '**', component: NotFoundComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegation/home/home.component';
import { NotAllowedComponent } from './navegation/not-allowed/not-allowed.component';
import { NotFoundComponent } from './navegation/not-found/not-found.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module')
      .then(m => m.AccountModule)
  },
  {
    path: 'budget',
    loadChildren: () => import('./budget/budget.module')
      .then(m => m.BudgetModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module')
      .then(m => m.CategoryModule)
  },
  {
    path: 'financial-transaction',
    loadChildren: () => import('./financial-transaction/financial-transaction.module')
      .then(m => m.FinancialTransactionModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module')
      .then(m => m.ReportsModule)
  },
  { path: 'not-allowed', component: NotAllowedComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
