<<<<<<< HEAD
import { Component,  Input, Output, EventEmitter } from '@angular/core';

=======
import { Component,  Input } from '@angular/core';
>>>>>>> 02761d12fe93785fc13af02103313cf93bdb675f

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
<<<<<<< HEAD


  @Input() all :number;
  @Input() male:number;
  @Input() female:number

  selectedRadioButtonValue:string = "All";

  @Output() countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadiobuttonSelectionChange(){
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue)
    console.log(this.selectedRadioButtonValue);
  }
=======
  @Input()
  all :number;

  @Input()
  male:number;

  @Input()
  female:number
>>>>>>> 02761d12fe93785fc13af02103313cf93bdb675f

}
