import { Component,  Input } from '@angular/core';
import { all } from 'q';

@Component({
  selector: 'app-count-employee',
  templateUrl: './count-employee.component.html',
  styleUrls: ['./count-employee.component.css']
})
export class CountEmployeeComponent {

  /* 
  all:number = 10;
  male:number = 3;
  female:number = 2;
*/
  @Input()
  all :number;
  @Input()
  male:number;
  @Input()
  female:number

}
