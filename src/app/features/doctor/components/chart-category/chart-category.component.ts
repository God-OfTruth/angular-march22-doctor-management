import { Component, OnInit, ViewChild } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { chartData } from '../../../../models/data'
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-chart-category',
  templateUrl: './chart-category.component.html',
  styleUrls: ['./chart-category.component.css']
})
export class ChartCategoryComponent implements OnInit {
  isDataAvl: boolean = false
  doc?:any
  label:string[]=[] 
  data:number[]=[]

  constructor(private doctorService: DoctorService) { 
  }

  ngOnInit(): void {
    this.showDoc()
    console.log("onInit");
    
  }
  
  
  showDoc() {
    this.doctorService.getSummary().subscribe((doctors:chartData) => {
      console.log("Response from Service ",doctors);
      // this.isDataAvl = true
      // console.log("Log From subscriber");
      this.doc = doctors;
      
      // console.log(doctors);
      this.label=this.doc["key"]
      this.data=this.doc["values"]
      console.log("Saved Data to Data Array ",this.data);
      console.log('Saved Data to label Array ',this.label);      
    });
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  //pie
  public pieChartOptions : ChartConfiguration['options'] = {
    responsive : true,
    plugins : {
      legend : {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels){
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['a','b','c'],
    datasets: [ {
      data: [50,44,80,58,78,14]
    } ]
  };

  // public pieChartData: ChartData<'pie', number[], string | string[]> = {
  //   labels: this.label,
  //   datasets: [ {
  //     data: this.data
  //   } ]
  // };

  public pieChartType: ChartType = 'pie';

  public pieChartPlugins = [ DatalabelsPlugin ];


}
