export class User {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  datetime: Date;
  agreement: boolean;
  notification: boolean;

  constructor() {
    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.address = "";
    this.datetime = new Date();
    this.agreement = false;
    this.notification = false;
  }

  
  
}
