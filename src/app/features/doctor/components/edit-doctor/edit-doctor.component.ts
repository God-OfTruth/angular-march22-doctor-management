import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from '../../doctor.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  constructor(private doctorService: DoctorService, private routes: Router, private activateRoute: ActivatedRoute) { }
  e: boolean = true
  updateDoctorForm = new FormGroup({
    id:new FormControl(),
    name: new FormControl(),
    specialization: new FormControl()
  })
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((val)=>{
      this.doctorService.getDoctor(val.get('id')).subscribe((doctor:Doctor)=> {
        this.updateDoctorForm.setValue({
          id:doctor.id,
          name:doctor.name,
          specialization:doctor.specialization
        })
      })
    })
    this.e=false
  }

  onUpdate() {
    const newDoc = this.updateDoctorForm.value;
    // const id = this.updateDoctorForm.value.docId;
    console.log();
    
    this.doctorService.updateDoc(newDoc.id, newDoc)
      .subscribe((val)=> {
        console.log(val);
        
        this.routes.navigateByUrl('/doctor/list');
      });
  }

}
