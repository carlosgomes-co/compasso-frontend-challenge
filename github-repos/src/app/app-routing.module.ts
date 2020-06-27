import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: '@establishments/establishments.module.ts#EstablishmentsModule' }
  // loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
