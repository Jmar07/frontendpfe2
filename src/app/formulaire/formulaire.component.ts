import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray,FormBuilder } from "@angular/forms";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';



export interface IClients{

  des:String;

}

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  formulaireForm = new FormGroup({
    username: new FormControl(null , Validators.required),
    password: new FormControl(null , Validators.required)    
  })


  modules = new FormControl()
  modulesData : any;
  myControl = new FormControl(); 
  clients : IClients[];
  filteredOptions: Observable<IClients[]>;

  constructor( private service : ServService , private router: Router ) { }

  ngOnInit(): void {

    this.getClients();
    this.getModules();

  }




  logout(){
    localStorage.removeItem("username");
    this.router.navigateByUrl("/login")
    
  }

  getClients(){
    this.service.getClient().subscribe((res: any) => {
      console.log(res);
      this.clients = res;
      console.log(this.clients);
      

    })
  }


  getModules(){
    this.service.getModules().subscribe((res: any) => {
      console.log(res);
      this.modulesData = res;

    })
  }

/*
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue)
    );
  }*/
}
