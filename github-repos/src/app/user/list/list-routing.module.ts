import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from '@user/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: { isPage: true }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRouterModule { }
