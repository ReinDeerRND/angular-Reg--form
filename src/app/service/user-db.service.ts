import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { errorObject } from "rxjs/internal-compatibility";
import { User } from "../model/User";
import { UsersList } from "../data/Users-list";

@Injectable()
export class UserDbService {
  constructor(private httpClient: HttpClient) {}

  public get(url: string): Observable<any> {
    try {
      return this.httpClient.get(url);
    } catch (error) {
      console.log(errorObject);
    }
  }

  public add(user: User) {
    UsersList.Users.push(user);
  }
}
