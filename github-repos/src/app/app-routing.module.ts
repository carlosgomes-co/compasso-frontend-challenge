import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '@header/header.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search'
  },
  {
    path: 'search',
    pathMatch: 'full',
    loadChildren: () => import('@header/header.module').then(m => m.HeaderModule)
  },
  {
    path: 'users',
    loadChildren: () => import('@user/user.module').then(m => m.UserModule)
  },
  {
    path: 'users/:searchTerm',
    loadChildren: () => import('@user/user.module').then(m => m.UserModule)
  },
  {
    path: 'user/:userName',
    loadChildren: () => import('@user/details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'user/:userName/repos',
    loadChildren: () => import('@user/repos/repos.module').then(m => m.ReposModule)
  },
  {
    path: 'user/:userName/starred',
    loadChildren: () => import('@user/repos/repos.module').then(m => m.ReposModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
