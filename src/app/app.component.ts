import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  c=true
  title = 'demo';
  child:any;

  data:any={
    companyName:'',
    Url:''
}

  getdata(n:any){
    this.child=n
    console.log("t",this.child)

  }
  
  print(event:ClipboardEvent){
    console.log(event)
    event.preventDefault()

  }
  product:any[]=[
    {
      productName:"Hp",
      Quantity:12,

    },
    {
      productName:"Lenovo",
      Quantity:6,

    },
    {
      productName:"Dell",
      Quantity:6,

    }
  ]


}
