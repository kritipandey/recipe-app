import { Component } from '@angular/core';

@Component({
  selector: 'app-odd-even',
  templateUrl: './odd-even.component.html',
  styleUrls: ['./odd-even.component.css']
})

export class OddEvenComponent {
//   numbers = [1, 2, 3, 4, 5];
  oddNum = [1,3,5];
  evenNum = [2,4];
  onlyOdd = false;
  value = 50;          // For ngSwitch
}