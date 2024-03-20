import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

type ColorClasses = 'mat-primary' | 'mat-accent' | 'mat-warn' | 'mat-success' | undefined;

@Directive({
  selector: '[myColor]'
})
export class MyColorDirective {

  @Input() set myColor(value: ColorClasses) {
    this.renderer.addClass(this.element.nativeElement, `${value}`);
  }

  constructor(private element: ElementRef, private renderer: Renderer2) { }
}
