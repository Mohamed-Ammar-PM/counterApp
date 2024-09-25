import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {
  
  count: number = 0;
  isChecked = false;
  stopVal= 0;
constructor(){
  this.count = parseInt(localStorage.getItem("count") || '0')
}
  // ngOnInit(): void {
  //   if(localStorage.getItem("count")!=""){
  //   this.count = JSON.parseInt(localStorage.getItem("count"));
  //   }
  //   else{
  //     this.count = 0;
  //   }
  // }

  onClick(): void {
    this.count++
    if(this.isChecked && this.count === this.stopVal){
      navigator.vibrate(1000);
      alert(this.stopVal+' completed - Click ok to continue - Reset to start from 0');
    }
    localStorage.setItem("count" , this.count.toString())
  }

  onReset(): void {
    this.count = 0;
    localStorage.setItem("count" , this.count.toString())
  }

  onCheck() {
    this.isChecked = !this.isChecked;
  }

}
