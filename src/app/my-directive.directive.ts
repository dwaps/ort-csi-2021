import { Directive, ElementRef, Host, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  @HostBinding('style.color') textColor = '';
  @Input('color') colorFromUser = '';

  @HostBinding('style.fontSize.rem')
  elFontSize: string = "0.7";

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'all 500ms';
  }

  @HostListener('mouseenter')
  zoomIn() {
    this.zoomElement(true);
  }

  @HostListener('mouseleave')
  zoomOut() {
    this.zoomElement(false);
  }

  zoomElement(yes: boolean) {
    this.el.nativeElement.style.fontSize = yes ? '2rem' : '';
    this.textColor = yes ? this.colorFromUser : '';
  }

}
