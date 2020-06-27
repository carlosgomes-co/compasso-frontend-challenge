import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from '@user/list/list.component';
import { DetailsComponent } from '@user/details/details.component';
import { ReposComponent } from '@user/repos/repos.component';

@NgModule({
  declarations: [ListComponent, DetailsComponent, ReposComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
