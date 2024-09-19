import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count=0;
  isChecked = false;

  onClick(): void {
    this.count++
    if(this.isChecked && this.count === 10){
      alert('100 completed - Click ok to continue - Reset to start from 0');
    }
  }

  onReset(): void {
    this.count = 0;
  }

  onCheck() {
    this.isChecked = !this.isChecked;
  }
}
