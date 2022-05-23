import { Component, OnInit } from '@angular/core';
import * as data from '../particlesjs-config.json';
import { Router, RouterModule } from '@angular/router';

declare const myTest: any;




@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  onClick(){
    myTest();
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
