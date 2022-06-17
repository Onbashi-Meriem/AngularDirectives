import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[appButtonColor]'
})

export class ButtonColorDirective{
    constructor(element:ElementRef){
        console.log(element)
        element.nativeElement.style.color='white';
        element.nativeElement.style.backgroundColor='dodgerblue'
        element.nativeElement.style.border='1px solid #555'
    }
}