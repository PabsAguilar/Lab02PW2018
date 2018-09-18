import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';

// import { RegistrationComponent } from './registration/registration.component';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
