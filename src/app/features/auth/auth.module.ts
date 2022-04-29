import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { UsernameDisplayComponent } from './components/username-display/username-display.component';


@NgModule({
  declarations: [
    LoginComponent,
    UsernameDisplayComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  exports: [
    UsernameDisplayComponent
  ]
})
export class AuthModule { }
