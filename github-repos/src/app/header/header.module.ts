import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRouterModule } from '@header/header-routing.module';
import { MaterialModule } from '@libs/material/material.module';
import { BootstrapModule } from '@libs/bootstrap/bootstrap.module';

import { HeaderComponent } from '@header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BootstrapModule,
    HeaderRouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
