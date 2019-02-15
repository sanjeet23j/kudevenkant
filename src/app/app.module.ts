import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { FormsModule } from '@angular/forms';
import { EmplTitlePepePipe } from './empl-title-pepe.pipe';
import { CountEmployeeComponent } from './count-employee/count-employee.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimplePageComponent } from './simple-page/simple-page.component'
import { RouterModule, Routes } from '@angular/router';



const AppRoutes : Routes = [
  { path : 'home' , component : HomeComponent  },
  { path : 'employees', component : EmployeesComponent },
  { path : '', redirectTo : '/home', pathMatch :'full' },
  { path : '**', component : PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmplTitlePepePipe,
    CountEmployeeComponent,
    HomeComponent,
    PageNotFoundComponent,
    SimplePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
