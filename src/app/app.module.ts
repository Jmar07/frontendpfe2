import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { NgParticlesModule } from "ng-particles";
import {MatSelectModule} from '@angular/material/select';
import { NgChartsModule } from 'ng2-charts';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FormulaireComponent,
    IndexComponent,
    LoginComponent,
    DashboardComponent,
    Dashboard2Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    NgParticlesModule,
    MatSelectModule,
    NgChartsModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatCheckboxModule
    
    

    

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
