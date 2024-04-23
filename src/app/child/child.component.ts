import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  name: string = '';
@Input() input:string =''
@Input() update:number=0;
@Output() nameChangeEvent = new EventEmitter<string>(); 

share() {
this.nameChangeEvent.emit(this.name);
}
ngOnChanges(changes:SimpleChanges){
  console.log(this.update)
}

}
