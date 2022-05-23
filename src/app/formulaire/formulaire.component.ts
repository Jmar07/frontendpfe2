import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray,FormBuilder } from "@angular/forms";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';
import {ThemePalette} from '@angular/material/core';
import {PostsService} from '../posts.service';


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

export interface IAcc{

  nomAcc:String
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
  clients : IClients[]
  accomps : IAcc[]
  

  clientModel = ""
 
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


  success:any

  modulesData : any;

  clientsData : any;
  filteredOptions: Observable<IClients[]>;

  constructor( private service : ServService , private router: Router, private fb: FormBuilder, private postsService: PostsService ) { }

  sendData(event:any){
    let query: string = event.target.value;

    this.postsService.searchClients(query.trim()).subscribe(results => {
      console.log(results); 
    });
  }

  formform:FormGroup
  ngOnInit(): void {

    
    this.formform = new  FormGroup({

      clientsInput : new FormControl(null,Validators.required),
      moduleInput : new FormControl(null,Validators.required),
      personnelInput : new FormControl(null),
      AccompanyingInput : new FormControl(null),
      startDateInput : new FormControl(null,Validators.required),
      endDateInput : new FormControl(null,Validators.required),
      startTimeInput : new FormControl(null,Validators.required),
      endTimeInput :new FormControl(null,Validators.required),
      numberSheetInput :new FormControl(null,Validators.required),
      signatureInput :new FormControl(null),
      fileInput : new FormControl(null),
      rapportInput : new FormControl(null,Validators.required),
      hours:new FormControl(0,Validators.min(0)),
      minutes:new FormControl(0, [Validators.min(0) , Validators.max(55)])

  
    })

    this.getClients();
    this.getModules();
    this.getAcc();

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

  getAcc(){
    this.service.getAcc().subscribe((res:any)=>{

      console.log(res);
      this.accomps = res;

    })
  }

  getModules(){
    this.service.getModules().subscribe((res: any) => {
      console.log(res);
      this.modulesData = res;

    } , error=>{
      console.log(error);
      
    })
  }

  redirect(){
    this.router.navigateByUrl("/entrer")
  }
  
  valide(){
   
    if(!this.formform.valid){
      return;
    } 
   console.log(this.formform.value);
   
    this.service.saveData(this.formform.value).subscribe((res:any)=>{
      console.log(res);
      
    })

    this.success = "Ajouter avec succès";

    setTimeout(()=>{
      this.redirect();
    } , 2000)
    
  
    
  }

/*
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue)
    );
  }*/
}
