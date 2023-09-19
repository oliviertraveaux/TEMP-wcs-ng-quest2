import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFirstMovie]',
})
export class FirstMovieDirective {
  @HostBinding('style.fontSize') myFontSize: string = '24px';

  @HostListener('mouseenter') onMouseEnter() {
    this.myFontSize = '36px';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.myFontSize = '24px';
  }
}
