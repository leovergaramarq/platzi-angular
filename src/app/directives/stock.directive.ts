import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appStock]'
})
export class StockDirective implements AfterViewInit {

  constructor(private element: ElementRef) {
  }
  ngAfterViewInit(): void {
    const { nativeElement: nat }: { nativeElement: HTMLElement } = this.element;
    if (nat.innerText && +nat.innerText < 10) {
      nat.style.color = 'red';
    }
  }

}
