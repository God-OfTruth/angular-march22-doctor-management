import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { DoctorLayoutComponent } from './components/doctor-layout/doctor-layout.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { Role } from '../../models/role';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';

const routes: Routes = [
  {
    path: '',
    component: DoctorLayoutComponent, 
    canActivate: [AuthGuard],   
    children: [
      {
        path: 'list',
        component: DoctorListComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [Role.ADMIN]
        },        
      },
      {
        path: 'edit/:id',
        component: EditDoctorComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [Role.ADMIN]
        }
      },
      {
        path: 'view',
        component: DoctorDetailsComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [Role.ADMIN, Role.USER]
        }
      },
      {
        path: 'create',
        component: CreateDoctorComponent,
        canActivate: [RoleGuard],
        data: {
          roles: [Role.ADMIN]
        }
      },
      {
        path: '',
        component: DashboardComponent,
        data: {
          roles: [Role.ADMIN, Role.USER]
        }
      }
    ]
  }
];



//doctor - Dashboard 
//doctor/view - doctor-details
//doctor/edit
//


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
