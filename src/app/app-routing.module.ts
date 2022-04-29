import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/doctor'
  },
  {
    path: 'doctor',
    loadChildren: () => import('./features/doctor/doctor.module').then(m => m.DoctorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
