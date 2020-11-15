import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styles: [`
      .logColor{
        color: #fff;
      }
  `]
})
export class Assignment2Component {
  showSecretText = false;
  log = [];

  onLoggingDetails(){
    this.showSecretText = !this.showSecretText;
    // this.log.push(this.log.length + 1);
    // using Date timestamp:
    this.log.push(new Date() );
  }
} 