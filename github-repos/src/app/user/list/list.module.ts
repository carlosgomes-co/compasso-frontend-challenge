import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BootstrapModule } from '@libs/bootstrap/bootstrap.module';
import { ListRouterModule } from '@user/list/list-routing.module';
import { ListComponent } from '@user/list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    BootstrapModule,
    HttpClientModule,
    ListRouterModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
