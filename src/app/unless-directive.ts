// opposite of *ngIf directive

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
    @Input() set appUnless(condition: boolean){
        if(!condition){
            this.vcref.createEmbeddedView(this.templateref);
        }else {
            this.vcref.clear(); 
        }
    }

    constructor(private templateref: TemplateRef<any> , private vcref: ViewContainerRef ) { }                

  
}