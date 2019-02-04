import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { FormsModule } from '@angular/forms';
import { EmplTitlePepePipe } from './empl-title-pepe.pipe';
import { CountEmployeeComponent } from './count-employee/count-employee.component'


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmplTitlePepePipe,
    CountEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
