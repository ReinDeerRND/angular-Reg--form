import { Component, OnInit } from "@angular/core";
import { User } from "../../model/User";
import { UserCreatorService } from "../../service/user-creator.service";
import {UserDbService} from "../../service/user-db.service";

@Component({
  selector: "app-ready-slide",
  templateUrl: "./ready-slide.component.html",
  styleUrls: ["./ready-slide.component.css","../../css/common.css"]
})
export class ReadySlideComponent implements OnInit {
  constructor(private usercreator: UserCreatorService, private userDB:UserDbService) {}

  ngOnInit() {
    console.log(this.usercreator.getUser());
  }

  sendUser(user:User){
    this.userDB.add(this.usercreator.getUser());
  }
}
