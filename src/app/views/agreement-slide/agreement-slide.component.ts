import { Component, OnInit } from "@angular/core";
import { User } from "../../model/User";
import { UserCreatorService } from "../../service/user-creator.service";

@Component({
  selector: "app-agreement-slide",
  templateUrl: "./agreement-slide.component.html",
  styleUrls: ["./agreement-slide.component.css", "../../css/common.css"]
})
export class AgreementSlideComponent implements OnInit {
  agreement: boolean;
  notification: boolean;

  constructor(private usercreator: UserCreatorService) {}

  ngOnInit() {
    this.agreement = false;
    this.notification = false;
  }
  toggleAgr() {
    this.agreement = !this.agreement;
  }
  toggleNot() {
    this.notification = !this.notification;
  }
  addAgrees() {
    this.usercreator.setAgrees(this.agreement, this.notification);
  }
}
