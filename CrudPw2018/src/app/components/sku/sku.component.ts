import { Component, OnInit, Input } from "@angular/core";
import { Sku } from "../../models/sku";
import { DataService } from "../../services/data.service";
@Component({
  selector: "app-sku",
  templateUrl: "./sku.component.html",
  styleUrls: ["./sku.component.css"]
})
export class SkuComponent implements OnInit {
  @Input("sku")
  sku: Sku;

  constructor(public dataService: DataService) {}

  ngOnInit() {}

  removeSku(sku: Sku) {
    if (confirm("Are you sure you want to delete this sku?")) {
      this.dataService.deleteSku(sku);
    }
  }
}
