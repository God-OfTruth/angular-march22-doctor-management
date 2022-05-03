import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
    AuthRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    UsernameDisplayComponent
  ]
})
export class AuthModule { }
