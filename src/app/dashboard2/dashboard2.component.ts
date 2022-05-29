import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';



declare const myTest: any;

  

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  /*myScriptElement: HTMLScriptElement;

  constructor() { 
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/assets/js/script.js";
    document.body.appendChild(this.myScriptElement);
  }*/

  onClick(){
    myTest();
  }


  ngOnInit(): void {
    
  }

}


