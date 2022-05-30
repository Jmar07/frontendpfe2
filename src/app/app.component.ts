import { response } from 'express';
import { ServService } from './serv.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from "@angular/forms";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'projetPFE';





  constructor(private router: Router, private http: HttpClient, private service: ServService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.service.getClient().subscribe((res: any) => {
      console.log(res);
    })
  }

  /* getNames(){
    this.service.getData().subscribe(response => {
      this.options = response;
    })
  }
*/
  onSend() {

  }


  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  testCors() {
    this.http.get("localhost:8000/client").subscribe(res => {
      console.log(res);

    })
  }


}

