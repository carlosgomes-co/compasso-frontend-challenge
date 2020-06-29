import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from '@user/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
    data: { isPage: true }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRouterModule { }
