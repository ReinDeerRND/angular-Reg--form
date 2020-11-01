import { Injectable } from "@angular/core";
import { User } from "../model/User";
import { UserData } from "../data/User-data";

@Injectable()
export class UserCreatorService {
  constructor() {}
  setTitles(fname: string, lname: string) {
    UserData.person.firstname = fname;
    UserData.person.lastname = lname;
  }

  setContacts(email: string, phone: string, address: string, datetime: Date) {
    UserData.person.email = email;
    UserData.person.phone = phone;
    UserData.person.address = address;
    UserData.person.datetime = datetime;
  }
  setAgrees(agree: boolean, notification: boolean) {
    UserData.person.agreement = agree;
    UserData.person.notification = notification;
  }
  getFirstName(): string {
    return UserData.person.firstname;
  }
  getLastName(): string {
    return UserData.person.lastname;
  }
  getEmail(): string {
    return UserData.person.email;
  }
  getDatetime(): Date {
    return UserData.person.datetime;
  }
  getUser(): User {
    return UserData.person;
  }
}
