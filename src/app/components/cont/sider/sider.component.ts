import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.sass']
})
export class SiderComponent {
  @Input() active: boolean = false;
  @Input() hide: () => void = (): void => { };

  // constructor() { }

}
