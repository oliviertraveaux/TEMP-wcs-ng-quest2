import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @HostBinding('style.backgroundColor') myBackGroundColor?: string;

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
  }
  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.myBackGroundColor = 'yellow';
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.myBackGroundColor = 'transparent';
  }
}
