import { MyguardGuard } from './myguard.guard';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from '../app/formulaire/formulaire.component'

const routes: Routes = [

  { path:'', redirectTo:"index" , pathMatch:"full"},
  { path:'index', component: IndexComponent},
  { path:'login',component: LoginComponent},
  { path:'formulaire',component: FormulaireComponent , canActivate:[MyguardGuard]},
  { path: 'dashboard',component: DashboardComponent , canActivate:[MyguardGuard]},
  { path: 'dash',component: Dashboard2Component , canActivate:[MyguardGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
