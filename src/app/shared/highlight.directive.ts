import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter')onMouseEnter(){
    /* this.renderer.setElementStyle(
       this.elementRef.nativeElement,
       'background-color',
       'yellow'
     )*/
     this.backgroundColor = this.highLightColor;
   }
   @HostListener('mouseleave')onMouseLeave(){
     /*this.renderer.setElementStyle(
       this.elementRef.nativeElement,
       'background-color',
       'white'
     )*/
       this.backgroundColor = this.defaultColor;
   }
 
   @HostBinding('style.backgroundColor') backgroundColor: string;
   @Input() defaultColor: string= 'white'
   @Input('highlight') highLightColor: string = 'yellow'

 
    ngOnInit(): void {
     this.backgroundColor = this.defaultColor;     
    }
   constructor(
     //private elementRef: ElementRef, private renderer:Renderer
     ) { }
   } 
