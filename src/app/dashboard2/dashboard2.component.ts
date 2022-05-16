import { Component, OnInit } from '@angular/core';


declare const myTest: any;

  

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
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


