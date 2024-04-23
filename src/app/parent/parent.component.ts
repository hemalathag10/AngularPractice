import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
name: string = '';
sendData: string = '';
Output: string = '';
flag:number=0

shareName(data: string) {
  this.Output = data;
  this.flag+=1
}

share () {
this.sendData = this.name;
}
}
