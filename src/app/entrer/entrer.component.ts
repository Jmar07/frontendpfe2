import { ServService } from './../serv.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entrer',
  templateUrl: './entrer.component.html',
  styleUrls: ['./entrer.component.css']
})
export class EntrerComponent implements OnInit {

  admin: boolean

  constructor(private router: Router, private service: ServService) { }

  ngOnInit(): void {

    if (localStorage.getItem("username") == "administrateur") {
      this.admin = true
    } else {
      this.admin = false
    }



  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }


  logout() {
    localStorage.removeItem("username");
    this.router.navigateByUrl("/login")

  }

}
