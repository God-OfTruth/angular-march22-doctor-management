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
import {MatTableModule} from '@angular/material/table';
import { ChartCategoryComponent } from './components/chart-category/chart-category.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorDetailsComponent,
    CreateDoctorComponent,
    EditDoctorComponent,
    DashboardComponent,
    DoctorLayoutComponent,
    ChartCategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DoctorRoutingModule,
    HttpClientModule,
    NgChartsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule
  ]
})
export class DoctorModule { }
