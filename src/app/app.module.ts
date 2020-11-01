import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TitleSlideComponent } from "./views/title-slide/title-slide.component";
import { ContactsSlideComponent } from "./views/contacts-slide/contacts-slide.component";
import { AgreementSlideComponent } from "./views/agreement-slide/agreement-slide.component";
import { UserCreatorService } from "./service/user-creator.service";
import { ReadySlideComponent } from "./views/ready-slide/ready-slide.component";
import { HttpClientModule } from "@angular/common/http";
import { UserDbService } from './service/user-db.service';

const appRoutes: Routes = [
  { path: "", component: TitleSlideComponent },
  { path: "contacts", component: ContactsSlideComponent },
  { path: "agreements", component: AgreementSlideComponent },
  { path: "ready", component: ReadySlideComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TitleSlideComponent,
    ContactsSlideComponent,
    AgreementSlideComponent,
    ReadySlideComponent
  ],
  bootstrap: [AppComponent],
  providers: [UserCreatorService, UserDbService]
})
export class AppModule {}
