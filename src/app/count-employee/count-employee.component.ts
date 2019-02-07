import { Component,  Input, Output, EventEmitter } from '@angular/core';


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


  @Input() all :number;
  @Input() male:number;
  @Input() female:number

  selectedRadioButtonValue:string = "All";

  @Output() countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadiobuttonSelectionChange(){
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue)
    console.log(this.selectedRadioButtonValue);
  }

}
