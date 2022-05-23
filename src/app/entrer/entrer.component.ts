import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entrer',
  templateUrl: './entrer.component.html',
  styleUrls: ['./entrer.component.css']
})
export class EntrerComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem("username");
    this.router.navigateByUrl("/login")
    
  }

}
