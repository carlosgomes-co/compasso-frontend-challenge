import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DetailsRouterModule } from '@user/details/details-routing.module';
import { DetailsComponent } from '@user/details/details.component';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    DetailsRouterModule
  ],
  exports: [DetailsComponent]
})
export class DetailsModule { }
