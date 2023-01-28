import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fund",
  templateUrl: "./fund.component.html",
  styleUrls: ["./fund.component.sass"]
})
export class FundComponent implements OnInit {
  info: { title: string } = { title: "asfnjdk" };
  inputs: any = {
    repeat: "",
    repeat2: ""
  };
  switchVar: number = 2;

  repeat(event: Event): void {
    this.inputs.repeat = (<HTMLInputElement>event.target).value;
  }

  increaseSwitch(): void {
    this.switchVar = (this.switchVar + 1) % 3;
  }

  ngOnInit(): void {}
}
