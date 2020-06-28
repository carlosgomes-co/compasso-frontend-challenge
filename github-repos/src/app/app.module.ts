import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '@app/app-routing.module';
import { HeaderModule } from '@header/header.module';
import { UserModule } from '@user/user.module';
import { LoaderModule } from '@shared/components/loader/loader.module';

import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    UserModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
