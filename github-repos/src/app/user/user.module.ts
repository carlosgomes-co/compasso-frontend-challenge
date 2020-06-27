import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ReposComponent } from './repos/repos.component';
import { StarredComponent } from './starred/starred.component';


@NgModule({
  declarations: [ListComponent, DetailsComponent, ReposComponent, StarredComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
