import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FundComponent } from "./components/fund/fund.component";
import { ContComponent } from "./components/cont/cont.component";
import { ProductsComponent } from './components/cont/products/products.component';
import { ProductComponent } from './components/cont/product/product.component';
import { ImgComponent } from './components/cont/img/img.component';
import { HeaderComponent } from './components/cont/header/header.component';
import { NavMenuComponent } from './components/cont/nav-menu/nav-menu.component';
import { SiderComponent } from './components/cont/sider/sider.component';
import { HamburgerMenuComponent } from './components/cont/hamburger-menu/hamburger-menu.component';

@NgModule({
  declarations: [AppComponent, FundComponent, ContComponent, ProductsComponent, ProductComponent, ImgComponent, HeaderComponent, NavMenuComponent, SiderComponent, HamburgerMenuComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
