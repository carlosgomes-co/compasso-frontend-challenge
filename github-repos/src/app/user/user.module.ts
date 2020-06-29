import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRouterModule } from '@user/user-routing.module';
import { HeaderModule } from '@header/header.module';
import { DetailsModule } from '@user/details/details.module';
import { ListModule } from '@user/list/list.module';
import { ReposModule } from '@user/repos/repos.module';

import { UserComponent } from '@user/user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRouterModule,
    HeaderModule,
    DetailsModule,
    ListModule,
    ReposModule
  ]
})
export class UserModule { }
