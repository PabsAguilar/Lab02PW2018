import { Injectable } from "@angular/core";
import { Sku } from "../models/sku";

@Injectable({
  providedIn: "root"
})
export class DataService {
  skus: Sku[];
  constructor() {
    this.skus = [];
  }
  getSkus() {
    if (localStorage.getItem("skus") === null) {
      this.skus = [];
    } else {
      this.skus = JSON.parse(localStorage.getItem("skus"));
    }
    return this.skus;
  }

  addSku(sku: Sku) {
    this.skus.push(sku);
    let skus = [];
    if (localStorage.getItem("skus") === null) {
      skus = [];
      skus.push(sku);
      localStorage.setItem("skus", JSON.stringify(skus));
    } else {
      skus = JSON.parse(localStorage.getItem("skus"));
      skus.push(sku);
      localStorage.setItem("skus", JSON.stringify(skus));
    }
  }

  deleteSku(sku: Sku) {
    for (let i = 0; i < this.skus.length; i++) {
      if (sku == this.skus[i]) {
        this.skus.splice(i, 1);
        localStorage.setItem("skus", JSON.stringify(this.skus));
      }
    }
  }
}
