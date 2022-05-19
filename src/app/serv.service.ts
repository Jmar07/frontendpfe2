import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';


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

  /*opts = [];*/

/*
   getData(){
    return this.opts.length ?

    of(this.opts) :

    this.http.get('https://localhost:8000/client').pipe(tap(data => this.opts = data))
  }*/ 
}
