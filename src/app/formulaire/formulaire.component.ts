import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray,FormBuilder } from "@angular/forms";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';
import {ThemePalette} from '@angular/material/core';


/* Signature */
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

/* Clients */
export interface IClients{

  des:String;

}

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  
  /* Signature */
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };
  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }


  formulaireForm = new FormGroup({
    username: new FormControl(null , Validators.required),
    password: new FormControl(null , Validators.required)    
  })


  modules = new FormControl()
  modulesData : any;
  myControl = new FormControl(); 
  clients = new FormControl();
  clientsData : any;
  filteredOptions: Observable<IClients[]>;

  constructor( private service : ServService , private router: Router, private fb: FormBuilder ) { }

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
