import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { Doctor } from 'src/app/models/doctor';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];
  update: boolean = false;
  id?:number  | any

  displayedColumns: string[] = ['id', 'name', 'speciaization', 'update', 'delete'];
  

  constructor(private doctorService: DoctorService, private routes: Router) {}

  ngOnInit(): void {
    this.showDoc();
  }
  
  showDoc() {
    this.doctorService.getDoctors().subscribe((doctors: Doctor[]) => {
      this.doctors = doctors;
    });
  }

  deleteById(id: number) {
    console.log('hello ' + id);

    this.doctorService.deleteDoctor(id).subscribe(() => {
      tap((v) => console.log(v));
    });
    this.showDoc();
  }

  updateById(doctor: Doctor) {
    
    this.routes.navigateByUrl(`/doctor/edit/${doctor.id}`)
  }

  
}
