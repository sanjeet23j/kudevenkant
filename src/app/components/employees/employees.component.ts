import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent{

  firstName:string = 'sanjeet';
  lastName:string = 'Kumar';
  gender:string = 'male';
  age:number = 24;

  colSapn:number= 2;
//class binding

btnBlue:string = 'btnBuleColor boldClass';
applySinglClass:Boolean = true;
applySinglClass1:Boolean = true;

addClasses(){
  let classes = {
    btnBuleColor: this.applySinglClass,
    boldClass:this.applySinglClass1

  };
  return classes;
}
showDetails: boolean = true;
toogleDetails():void{
  this.showDetails = !this.showDetails
}
// two-way data binding
name:string = 'Tom';


employees :any[] 
  constructor(){
    this.employees = [
      {code : 'emp101' , name : 'Sanjeet' , DOB: '02-01-1994', gender : 'Male', salary : '30k'},
      {code : 'emp102' , name : 'Nishu' , DOB: '12-01-1994', gender : 'Female', salary : '40k'},
      {code : 'emp103' , name : 'Sanjana' , DOB: '22-11-1990', gender : 'Female', salary : '50k'},
      {code : 'emp104' , name : 'Neha' , DOB: '02-12-1991', gender : 'Female', salary : '60k'},
      {code : 'emp105' , name : 'Tom' , DOB: '02-09-1997', gender : 'Male', salary : '20k'},
      {code : 'emp106' , name : 'Jerry' , DOB: '20-01-1996', gender : 'Female', salary : '30k'}
      ];
   
  }
  getEmployee():void{
    this.employees =[
      {code : 'emp101' , name : 'Sanjeet' , DOB: '02-01-1994', gender : 'Male', salary : '30k'},
      {code : 'emp102' , name : 'Nishu' , DOB: '12-01-1994', gender : 'Female', salary : '40k'},
      {code : 'emp103' , name : 'Sanjana' , DOB: '22-11-1990', gender : 'Female', salary : '50k'},
      {code : 'emp104' , name : 'Neha' , DOB: '02-12-1991', gender : 'Female', salary : '60k'},
      {code : 'emp105' , name : 'Tom' , DOB: '02-09-1997', gender : 'Male', salary : '20k'},
      {code : 'emp106' , name : 'Jerry' , DOB: '20-01-1996', gender : 'Female', salary : '30k'},
      {code : 'emp107' , name : 'Nandani' , DOB: '20-01-2013', gender : 'Female', salary : '60k'}
    ]
  }
}
