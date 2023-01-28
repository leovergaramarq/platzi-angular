import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.sass']
})
export class HamburgerMenuComponent {
  @Input() showSider: () => void = (): void => { };
}
