import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../../app.component";
import { User } from "../../model/User";
import { UserCreatorService } from "../../service/user-creator.service";

@Component({
  selector: "app-title-slide",
  templateUrl: "./title-slide.component.html",
  styleUrls: ["./title-slide.component.css","../../css/common.css"]
})
export class TitleSlideComponent implements OnInit {
  firstname: string;
  lastname: string;

  constructor(private usercreator: UserCreatorService) {}

  ngOnInit() {}

  addNames() {
    this.usercreator.setTitles(this.firstname, this.lastname);
  }
}
