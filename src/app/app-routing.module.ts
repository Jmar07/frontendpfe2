import { AdminGuardGuard } from './admin-guard.guard';
import { DashComponent } from './dash/dash.component';
import { RealiseComponent } from './realise/realise.component';
import { EntrerComponent } from './entrer/entrer.component';
import { MyguardGuard } from './myguard.guard';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard1Component } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from '../app/formulaire/formulaire.component'

const routes: Routes = [

  { path:'', redirectTo:"index" , pathMatch:"full"},
  { path:'index', component: IndexComponent},
  { path:'login',component: LoginComponent},
  { path:'formulaire',component: FormulaireComponent , canActivate:[MyguardGuard]},
  { path:"dash",component : DashComponent , canActivate:[AdminGuardGuard]},
  { path: 'entrer',component: EntrerComponent},
  { path: 'realise',component: RealiseComponent , canActivate:[MyguardGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
