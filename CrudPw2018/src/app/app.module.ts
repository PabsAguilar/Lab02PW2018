import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FormsModule } from "@angular/forms";

// import { RegistrationComponent } from './registration/registration.component';

import { HomeComponent } from "./home/home.component";
import { SkuCRUDComponent } from "./sku-crud/sku-crud.component";
import { SkuAddComponent } from "./components/sku-add/sku-add.component";
import { SkuListComponent } from "./components/sku-list/sku-list.component";
import { DataService } from "./services/data.service";
import { SkuComponent } from './components/sku/sku.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SkuAddComponent,
    SkuListComponent,
    SkuComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot(), FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
