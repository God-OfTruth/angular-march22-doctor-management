import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../doctor.service';

@Component({
  selector: 'app-chart-category',
  templateUrl: './chart-category.component.html',
  styleUrls: ['./chart-category.component.css']
})
export class ChartCategoryComponent implements OnInit {


  doc?:{
    totalCount: number,
    category:any
  }

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.showDoc()
  }
  showDoc() {
    this.doctorService.docSummary().subscribe((doctors:any) => {
      this.doc = doctors;
      console.log(this.doc);
    });
  }
}
