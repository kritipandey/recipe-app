import { Component, OnInit, Input, ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated               // None and Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {       // Implementing interfaces whichever our component uses is a good practice: ngOnit etc.
  @Input('srvElement') element: {name: string, type: string, content: string };
  @Input() name:string;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges){                                        // Only hook that receives arguments 
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}



// IMPORTANT NOTE:
// we have used "@Input" decorator because by default all properties of components are only accessible inside the 
// component only and since we have to access "element" property from outside, we'll use input decorator as mentioned. 
// And we use paranthesis "()" because we need to execute it. 