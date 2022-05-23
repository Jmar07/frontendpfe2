import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface Clients {
  des:string
}


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }


  searchClients(query: string){
    return this.http.post<{payload: string}>('http://localhost:8000/client', {payload: query}, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      map(data => data.payload)
    );
  }

}
