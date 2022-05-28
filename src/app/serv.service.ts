import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ServService {

  private baseURL = "http://localhost:8000/"

  constructor(private http: HttpClient) { }

  getClient(){
    return this.http.get(this.baseURL+"client")
  }


  getModules(){
    return this.http.get(this.baseURL+"module")
  }
  
  
  saveData(form:any){
    return this.http.post(this.baseURL+"form",form)
  }


  getPers(id:any){
    console.log(id);
    
    return this.http.get(this.baseURL+`personnel/${id}`);
  }

  getAcc(){
    return this.http.get(this.baseURL+"accomp")
  }


  saveModule(idForm : String , moduleId:number ){
    const module = {idForm , moduleId}

  console.log(module);


    return this.http.post(this.baseURL+"formModule",module);
  }

  getForm(id:number){
      return this.http.get(this.baseURL+`form/${id}`)
  }

  getModulesDes(id:number){
      return this.http.get(this.baseURL+`module/${id}`)
  }

  getModuleByIdForm(id:any):any{
    return this.http.get(this.baseURL+`moduleForm/${id}`)

  }

  /*opts = [];*/

/*
   getData(){
    return this.opts.length ?

    of(this.opts) :

    this.http.get('https://localhost:8000/client').pipe(tap(data => this.opts = data))
  }*/ 
}
