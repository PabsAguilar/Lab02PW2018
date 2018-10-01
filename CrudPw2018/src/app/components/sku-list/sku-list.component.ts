import { Component, OnInit } from "@angular/core";

import { Sku } from "../../models/sku";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-sku-list",
  templateUrl: "./sku-list.component.html",
  styleUrls: ["./sku-list.component.css"]
})
export class SkuListComponent implements OnInit {
  skus: Sku[];
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.skus = this.dataService.getSkus();
  }

  addSku(sku: Sku) {
    this.dataService.addSkus(sku);
  }
}
