import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[CollInput]'
})
export class CollInputDirective implements OnInit {
  @Input() CollInputDefaultBgColor: string = 'white';
  @Input() CollInputFocusBgColor: string = 'orange';

  constructor(private el: ElementRef, private rend: Renderer2) {
  }

  private _backgroundColor: string = '';

  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor;
  }
  private _isOnFocus: boolean = false;
  @HostBinding('class.isOnFocus')
  get getIsOnFocus() {
    return this._isOnFocus;
  }

  @HostListener('focus')
  onFocus() {
    this.changeElementBgColor(this.CollInputFocusBgColor);
    this._isOnFocus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.changeElementBgColor(this.CollInputDefaultBgColor);
    this._isOnFocus = false;
  }

  @HostListener('click', ['$event, $event.target'])
  onClick(event: Event, target: HTMLElement) {
    console.log(event);
    console.log(target);
  }

  ngOnInit() {
    this.changeElementBgColor(this.CollInputDefaultBgColor);
    this.rend.setAttribute(this.el.nativeElement, 'placeholder',
      this.el.nativeElement.getAttribute('placeholder') + '*');
  }

  changeElementBgColor(color: string) {
    this._backgroundColor = color;
  }

}
