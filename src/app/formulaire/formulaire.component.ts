import { v4 } from './../../../node_modules/@types/uuid/index.d';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray,FormBuilder } from "@angular/forms";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';
import {ThemePalette} from '@angular/material/core';
import {PostsService} from '../posts.service';
import * as uuid from 'uuid';

import { v4 as uuidv4 } from 'uuid';

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
  id:String

}

export interface IAcc{

  nomAcc:String
}

export interface IModules{

  designation:String;

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
  clients :Observable<any[]>

  modules :Observable<any[]>

  
   idClient : IClients[] = []

   idModule : IModules[] = []



   pers : any

  copyclients : any[]
  copymodules : any[]

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

  myControl = new FormControl(null,Validators.required);

  

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
    this.idForm = uuid.v1()

    
    this.formform = new  FormGroup({

      clientsInput : new FormControl(null,Validators.required),
      moduleInput : new FormControl(null,Validators.required),
      moduleValue : new FormControl(null),
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
    this.getModulesDes()

  }

  getPers(){

console.log(this.myControl.value);

this.formform.controls["clientsInput"].setValue(this.myControl.value)

    this.service.getPers(this.idClient[0].id).subscribe(res=>{

      console.log(res);
      
      this.pers = res;
    })

  }

userModules = new Array()

formData : any;
  getModulesDes(){


      this.service.getForm(22).subscribe(res=>{

        console.log(res);

       this.formData = res;

      let moduleInput =  this.formData[0].moduleInput
console.log("module input : "+moduleInput);

      this.service.getModuleByIdForm(moduleInput).subscribe((res: any)=>{
        console.log(res);
        
        for(let i = 0 ; i < res.length ; i++){

          console.log(res[i].module);
          
          this.service.getModulesDes(res[i].module).subscribe(res=>{
            console.log(res);
            this.userModules.push(res)
          })

        }

      })
        
      })


  }

test(event:any){
  console.log(event.option.value);
  const des = event.option.value;
  const designation = event.option.value;
  

  this.idClient =  this.copyclients.filter(client=>{
    return client.des == des
  })


this.getPers()


}

// uuid
idForm : String

  logout(){
    localStorage.removeItem("username");
    this.router.navigateByUrl("/login")
    
  }

  getClients(){
    this.service.getClient().subscribe((res: any) => {
      console.log(res);
      this.copyclients = res;
      this.clients = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value =>{
          console.log(value)
          return this._filter(value)}),
      );
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
   
    this.showListOfModules();
   
    if(!this.formform.valid){
      
      return;
    } 
   console.log(this.formform.value);
   
   this.formform.controls["moduleValue"].setValue(this.idForm)

    this.service.saveData(this.formform.value).subscribe((res:any)=>{
      console.log(res);
      
    })

    this.success = "Ajouter avec succès";

    setTimeout(()=>{
      this.redirect();
    } , 2000)
    
  
    
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();


    return this.copyclients.filter(option => option?.des.toLowerCase().includes(filterValue));

  }





showListOfModules(){

  console.log(this.formform.controls["moduleInput"].value);
  
  // get array of if modules
  const modulesArray = this.formform.controls["moduleInput"].value
 

  for(let i=0 ; i< modulesArray.length ; i++){
    

    this.service.saveModule(this.idForm,modulesArray[i]).subscribe((res:any)=>{

      console.log(res);
      
  
    })

  }
  



}


}
