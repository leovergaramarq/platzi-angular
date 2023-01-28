import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass']
})
export class ImgComponent {
  @Input() src: string = DEFAULT_IMG;
  @Input() alt: string = 'no image';
  @Input() width: string = '100%';
  @Input() height: string = '100%';

  @Output() load: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  onLoad() {
    // console.log('onLoad');
    this.load.emit(true);
  }

  onError() {
    // console.log('onError');
    this.src = DEFAULT_IMG;
    this.load.emit(false);
  }

}

const DEFAULT_IMG = './assets/img/no-image.svg';
