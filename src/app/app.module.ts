import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

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
    MatDividerModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
