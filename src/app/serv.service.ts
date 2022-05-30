import { Realise } from './realise/realise.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ServService {

  private baseURL = "http://localhost:8000/"

  constructor(private http: HttpClient) { }

  getClient() {
    return this.http.get(this.baseURL + "client")
  }


  getModules() {
    return this.http.get(this.baseURL + "module")
  }


  saveData(form: any) {
    return this.http.post(this.baseURL + "form", form)
  }


  getPers(id: any) {
    console.log(id);

    return this.http.get(this.baseURL + `personnel/${id}`);
  }

  getAcc() {
    return this.http.get(this.baseURL + "accomp")
  }


  saveModule(idForm: String, moduleId: number) {
    const module = { idForm, moduleId }

    console.log(module);


    return this.http.post(this.baseURL + "formModule", module);
  }

  getForm(id: any) {
    console.log("from service get form" + id);

    return this.http.get(this.baseURL + `form/${id}`)
  }

  getListOfForms() {

    return this.http.get(this.baseURL + `form`)
  }


  getModulesDes(id: number): any {
    return this.http.get(this.baseURL + `module/${id}`)
  }

  getModuleByIdForm(id: any) {
    return this.http.get(this.baseURL + `moduleForm/${id}`)

  }


  getActifUsers() {
    return this.http.get(this.baseURL + "activeusers");
  }

  getInActifUsers() {
    return this.http.get(this.baseURL + "inactiveusers");
  }

  getModuleDate() {
    return this.http.get(this.baseURL + "formdate");
  }



  /*opts = [];*/

  /*
     getData(){
      return this.opts.length ?
  
      of(this.opts) :
  
      this.http.get('https://localhost:8000/client').pipe(tap(data => this.opts = data))
    }*/
}
