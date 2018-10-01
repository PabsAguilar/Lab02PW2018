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
}
