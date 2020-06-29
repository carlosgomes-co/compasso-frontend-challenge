import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapModule } from '@libs/bootstrap/bootstrap.module';
import { ReposComponent } from '@user/repos/repos.component';

@NgModule({
  declarations: [ReposComponent],
  imports: [
    CommonModule,
    BootstrapModule
  ],
  exports: [ReposComponent]
})
export class ReposModule { }
