import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from '@user/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    data: { isPage: true }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouterModule { }
