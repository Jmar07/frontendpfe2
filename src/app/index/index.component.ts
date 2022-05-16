import { Component, OnInit } from '@angular/core';
import * as data from '../particlesjs-config.json';

declare const myTest: any;




@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  onClick(){
    myTest();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
