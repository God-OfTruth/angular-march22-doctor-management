import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './features/auth/auth.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    AuthModule,
    AppRoutingModule,
    MatDividerModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
