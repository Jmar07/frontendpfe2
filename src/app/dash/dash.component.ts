import { MatSidenav } from '@angular/material/sidenav';
import { ServService } from './../serv.service';
import { ChartData, ChartType, ChartConfiguration, Chart } from 'chart.js';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Utils } from 'angular-bootstrap-md/lib/free/utils';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  activUsers : any;
  inactivuser : any ;

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }


  constructor(private service : ServService) { }
  dateArray = new Array()
  months = new Array()

  ngOnInit(): void {

    this.service.getModuleDate().subscribe((data:any)=>{

      this.dateArray.push(data);

      var result = Object.keys(data).map((key) => [Number(key), data[key]]);

      for(let i = 0 ; i < result.length ; i++){

        console.log(result[i][1]["dateInput"]);
        const date = result[i][1]["dateInput"]

        const ch = date.slice(date.indexOf("/")+1 ,date.lastIndexOf("/"))
        
          this.months.push(ch)

      }

      console.log(this.months);
      
      let set = new Set(this.months)

      console.log(set);
      

    })
    


    this.service.getActifUsers().subscribe((data:any)=>{
     
      var result = Object.keys(data).map((key) => [Number(key), data[key]]);

      this.activUsers = result[0][1]["count(*)"];
      
    })

    this.service.getInActifUsers().subscribe((data:any)=>{
      
      var result = Object.keys(data).map((key) => [Number(key), data[key]]);

      this.inactivuser = result[0][1]["count(*)"];

      
this.myChart();
this.monthsChart()
      
    })


  }


  monthsChart(){
    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let myChart = new Chart("months", {
      type: 'bar',
      data: {
          labels: mL,
          datasets: [{
              
              data: [5,8,5,8,5,8,9,15,18,15,5,10],
              
          }]
      },
  });

}
  


  myChart(){
    console.log("my chart");
    
    let myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
          labels: ['utilisateurs inactifs', "utilisateurs actifs"],
          datasets: [{
              
              data: [this.inactivuser, this.activUsers],
              backgroundColor: [
                  'darkred',
                  'darkgreen',
              ],
              hoverOffset: 2,
              hoverBackgroundColor:[
                'darkred',
                  'darkgreen',
              ]
              
          }]
      },
  });
  }

}
