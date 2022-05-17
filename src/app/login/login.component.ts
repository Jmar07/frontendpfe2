
import { FormGroup, FormBuilder , FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

import User from "../models/User";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(null , Validators.required),
    password: new FormControl(null , Validators.required)    
  })

  constructor( private formBuilder : FormBuilder, private http:HttpClient, private router: Router ) {
 }

 user : any;

  ngOnInit(): void {

    this.user = new User();
    
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

error:"";
username:"";
success:any

redirect(){
  this.router.navigateByUrl("/formulaire")
}


loginFun(){

  console.log(this.loginForm.controls);

  if(!this.loginForm.valid){
    console.log("leee");
    return;
  }
  else {
  

    this.http.post('http://localhost:8000/login',this.loginForm.value)
  
    .subscribe( (results)=> {

      this.user = results;

      console.log(this.user);
      

      localStorage.setItem("username","3aaa");
      this.success = "Login success";

      setTimeout(()=>{
        this.redirect();
      } , 2000)

      
    },error=>{
      console.log(error);
      this.error = error.error;
    }
    
    
    );}

  }
}
