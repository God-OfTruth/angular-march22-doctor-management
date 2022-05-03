import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DoctorLayoutComponent } from './components/doctor-layout/doctor-layout.component';


@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorDetailsComponent,
    CreateDoctorComponent,
    EditDoctorComponent,
    DashboardComponent,
    DoctorLayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DoctorRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ]
})
export class DoctorModule { }
