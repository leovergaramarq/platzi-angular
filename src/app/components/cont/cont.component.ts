import { Component, OnInit } from "@angular/core";
import { SiderService } from "../../services/sider.service";

@Component({
  selector: "app-cont",
  templateUrl: "./cont.component.html",
  styleUrls: ["./cont.component.sass"]
})
export class ContComponent implements OnInit {
  ngOnInit(): void { }

  siderActive: boolean = true;

  showSider: () => void = (): void => {
    this.siderService.showMenu();
    this.siderActive = this.siderService.getActive();
  }

  hideSider: () => void = (): void => {
    this.siderService.hideMenu();
    this.siderActive = this.siderService.getActive();
  }

  constructor(private siderService: SiderService) { }

}
