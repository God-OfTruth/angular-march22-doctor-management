import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { DoctorSummary } from '../../../../models/data'

@Component({
  selector: 'app-chart-category',
  templateUrl: './chart-category.component.html',
  styleUrls: ['./chart-category.component.css']
})
export class ChartCategoryComponent implements OnInit {


  doc?:any

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.showDoc()
  }
  showDoc() {
    this.doctorService.getSummary().subscribe((doctors:DoctorSummary) => {
      this.doc = doctors;
      console.log(this.doc);
    });
  }
}
