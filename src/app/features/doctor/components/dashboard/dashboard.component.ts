import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }

  docCount?:number
 

  ngOnInit(): void {
    this.getDocCount()
    
  }
  getDocCount() {
    this.doctorService.getSummary().subscribe((doctors:any) => {
      this.docCount=doctors.totalCount;
    });
  }
}
