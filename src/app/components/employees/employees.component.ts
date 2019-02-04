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
      {code : 'emp101' , name : 'Sanjeet' , DOB: '02-01-1994', gender : 'Male', salary : '30000.345'},
      {code : 'emp102' , name : 'Nishu' , DOB: '12-01-1994', gender : 'Female', salary : '40000.691'},
      {code : 'emp103' , name : 'Sanjana' , DOB: '05-11-1990', gender : 'Female', salary : '50222.542'},
      {code : 'emp104' , name : 'Neha' , DOB: '02-12-1991', gender : 'Female', salary : '60845.984'},
      {code : 'emp105' , name : 'Tom' , DOB: '02-09-1997', gender : 'Male', salary : '20555.458'},
      {code : 'emp106' , name : 'Jerry' , DOB: '6-31-2013', gender : 'Female', salary : '37855.5884'}
      ];
      
  }
  getEmployee():void{
    this.employees =[
      {code : 'emp101' , name : 'Sanjeet' , DOB: '02-01-1994', gender : 'Male', salary : '30000.345'},
      {code : 'emp102' , name : 'Nishu' , DOB: '12-01-1994', gender : 'Female', salary : '40000.691'},
      {code : 'emp102' , name : 'Nishu' , DOB: '12-01-1994', gender : 'Female', salary : '50222.542'},
      {code : 'emp103' , name : 'Sanjana' , DOB: '11-21-1990', gender : 'Female', salary : '60845.984'},
      {code : 'emp104' , name : 'Neha' , DOB: '02-12-1991', gender : 'Female', salary : '20555.458'},
      {code : 'emp105' , name : 'Tom' , DOB: '02-09-1997', gender : 'Male', salary : '37855.5884'},
      {code : 'emp106' , name : 'Jerry' , DOB: '10-12-1996', gender : 'Female', salary : '30854.999'},
      {code : 'emp107' , name : 'Nandani' , DOB: '6-31-2013', gender : 'Female', salary : '60894.698'}
    ]
  }


  getTotaleEmployeesCount():number{
    return this.employees.length
  }
  
getTotaleMaleEmployeesCount():number{
  return this.employees.filter(e => e.gender === "male").length;
}

getTotaleFemaleEmployeesCount():number{
  return this.employees.filter(e => e.gender === "femle").length;
}

}



















