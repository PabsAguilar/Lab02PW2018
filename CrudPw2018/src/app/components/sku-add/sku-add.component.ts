import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Sku } from "../../models/sku";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-sku-add",
  templateUrl: "./sku-add.component.html",
  styleUrls: ["./sku-add.component.css"]
})
export class SkuAddComponent implements OnInit {
  sku: string;
  description: string;
  createDate: NgbDateStruct;
  image: string;
  family: string;
  hide: boolean;
  @Output()
  skuAdded = new EventEmitter<Sku>();

  constructor() {}

  ngOnInit() {}

  addTask() {
    this.skuAdded.emit({
      sku: this.sku,
      description: this.description,
      createDate: this.createDate,
      image: this.image,
      family: this.family,
      hide: true
    });
  }
}
