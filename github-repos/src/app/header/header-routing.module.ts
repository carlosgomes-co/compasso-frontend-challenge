import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from '@header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    data: { isPage: true }
  }
  // { path: ':id', loadChildren: '@establishments/details/details.module#DetailsModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRouterModule { }
