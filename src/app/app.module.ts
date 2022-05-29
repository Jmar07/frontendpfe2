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
import { Dashboard1Component } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { NgParticlesModule } from "ng-particles";
import {MatSelectModule} from '@angular/material/select';
import { NgChartsModule } from 'ng2-charts';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule} from "@angular/material/core"
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { EntrerComponent } from './entrer/entrer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { v4 as uuidv4 } from 'uuid';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RealiseComponent } from './realise/realise.component';



import {MatTableModule} from '@angular/material/table';
import { ModuleDialogComponent } from './module-dialog/module-dialog.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FormulaireComponent,
    IndexComponent,
    LoginComponent,
    Dashboard1Component,
    Dashboard2Component,
    EntrerComponent,
    RealiseComponent,
    ModuleDialogComponent,
    

    
    
    
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
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MDBBootstrapModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
