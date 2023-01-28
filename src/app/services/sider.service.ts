import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiderService {

  private active: boolean = false;

  constructor() { }

  getActive(): boolean {
    return this.active;
  }

  toggleMenu() {
    this.active = !this.active;
  }

  hideMenu(): void {
    this.active = false;
  }

  showMenu(): void {
    this.active = true;
  }
}
