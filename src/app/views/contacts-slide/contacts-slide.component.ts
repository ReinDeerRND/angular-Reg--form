import { Component, OnInit } from "@angular/core";
import { User } from "../../model/User";
import { UserCreatorService } from "../../service/user-creator.service";

@Component({
  selector: "app-contacts-slide",
  templateUrl: "./contacts-slide.component.html",
  styleUrls: ["./contacts-slide.component.css", "../../css/common.css"]
})
export class ContactsSlideComponent implements OnInit {
  email: string;
  phone: string;
  address: string;
  datetime: Date;
  date: string;
  time: string;
  arrayDate: Array<any>;
  arrayTime: Array<any>;

  constructor(private usercreator: UserCreatorService) {}
  ngOnInit() {
    this.datetime = new Date();
  }
  addContacts() {
    this.address = (<HTMLInputElement>document.getElementById("address")).value;

    this.arrayDate = this.date.split("-");
    this.arrayDate.forEach(function(value) {
      value = Number(value);
    });
    this.arrayTime = this.time.split(":");

    this.arrayTime.forEach(function(value) {
      value = Number(value);
    });

    this.datetime.setFullYear(this.arrayDate[0]);
    this.datetime.setMonth(this.arrayDate[1] - 1);
    this.datetime.setDate(this.arrayDate[2]);
    this.datetime.setHours(this.arrayTime[0]);
    this.datetime.setMinutes(this.arrayTime[1]);
    this.datetime.setSeconds(0);

    this.usercreator.setContacts(
      this.email,
      this.phone,
      this.address,
      this.datetime
    );
  }
}
