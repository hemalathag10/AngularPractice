import { Component, OnInit , OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnInit, OnDestroy {
  name = "Angular " ;
  display: number=0
constructor(private router:Router){

}
  
  ngOnInit(){
    this.timer();

  }

  timer() {
    
    const timer = setInterval(() => {

      this.display = this.display+1

     
    }, 1000);
  }
  navigate(){
    console.log("kk")
    // this.router.navigate(['parent']);
  }
  ngOnDestroy(): void {
    console.log("destroyed")
  }

  
}
