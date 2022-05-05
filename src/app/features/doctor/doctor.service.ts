import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Doctor } from '../../models/doctor';
import {DocSummary, DoctorSummary} from '../../models/data'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  deleteDoctor(doctorId:number){
    console.log('hello'+doctorId);
    
    return this.http.delete(`/api/doctors/${doctorId}`);
  }

  getDoctor(doctorId:string | null){
    return this.http.get<Doctor>(`/api/doctors/${doctorId}`);
  }

  getDoctors(){
    return this.http.get<Doctor[]>('/api/doctors');
  }

  getSpecializations(){
    return this.http.get<string[]>('/api/doctors/specializations');
  }

  createDoctor(newUser: Doctor){
    return this.http.post('/api/doctors',newUser);
  }

  updateDoc(id: number, newUser: Doctor){
    return this.http.patch(`/api/doctors/${id}`, newUser,);
  }

  getSummary(): Observable<DoctorSummary>{
    return this.http
    .get<DocSummary>('api/doctors/summary')
      .pipe(
        map((doctorSummary: DocSummary) => {
          const specialization = Object.keys(doctorSummary.category);
          const categories = specialization.map(sp => {
                                return {
                                  name : sp,
                                  value: doctorSummary.category[sp]
            }
          })
          return {
            totalCount: doctorSummary.totalCount,
            categories
          };
        })
      )
  }
}
