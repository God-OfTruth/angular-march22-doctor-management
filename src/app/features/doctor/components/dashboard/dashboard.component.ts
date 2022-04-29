import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    // this.doctorService.getDoctors()
    //   .subscribe((val:any) => {
    //     console.log(val);
    //   })
  }

}
