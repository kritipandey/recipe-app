import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCreateBetterDirective]'
})
export class CreateBetterDirectiveDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'yellow';

// If want to change any style, use Hostbinding because here we can bind to any property and so renderer is not required ONLY here.
  @HostBinding('style.backgroundColor') backgroundColor: string; 

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }                //Injecting better tool renderer of type Renderer2

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow' )
  }

// If only want styling on hover
  @HostListener('mouseenter') mouseover(eventdata: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow' )
    this.backgroundColor= this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventdata: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent' )
    this.backgroundColor= this.defaultColor;
  }
}






// It is a better approach as angular is not limited to running in the browser. Sometimes in these environments
// we don't have access to the DOM, so if we try to change the dom as we did in create-basic-directive by directly 
// accessing the native element and style of element, we might get an error sometimes and sometimes not. 
// Still it is a better practice to use Renderer2 for DOM access/DOM manipulations.


// HostListener is a convib=nient way to listen to events.
