import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appCreateBasicDirective]'
})

export class CreateBasicAttributeDirective implements OnInit{

    constructor(private elementRef: ElementRef){
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'pink';
    }
}