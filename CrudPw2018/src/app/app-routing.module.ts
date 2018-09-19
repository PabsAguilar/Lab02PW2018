import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SkuCRUDComponent } from "./sku-crud/sku-crud.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "sku-crud",
    component: SkuCRUDComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
