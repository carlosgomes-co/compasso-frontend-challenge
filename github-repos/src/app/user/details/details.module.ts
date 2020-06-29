import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BootstrapModule } from '@libs/bootstrap/bootstrap.module';
import { HeaderModule } from '@header/header.module';
import { ReposModule } from '@user/repos/repos.module';
import { DetailsRouterModule } from '@user/details/details-routing.module';
import { DetailsComponent } from '@user/details/details.component';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    BootstrapModule,
    HttpClientModule,
    DetailsRouterModule,
    HeaderModule,
    ReposModule
  ],
  exports: [DetailsComponent]
})
export class DetailsModule { }
