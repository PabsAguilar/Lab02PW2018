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

  getSkus(): Sku[] {
    this.skus = this.getSkusFromLocalStorage();
    return this.skus;
  }

  getSkusFromLocalStorage(): Sku[] {
    if (localStorage.getItem("skus") === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("skus"));
    }
  }

  addSkus(sku: Sku): void {
    let skus;
    if (localStorage.getItem("skus") === null) {
      skus = [];
    } else {
      skus = JSON.parse(localStorage.getItem("skus"));
    }
    skus.shift(sku);
    this.saveSkuToLocalStorage();
  }

  saveSkuToLocalStorage(): void {
    localStorage.setItem("tasks", JSON.stringify(this.skus));
  }
  removeSkus(sku: Sku): void {
    for (let i = 0; this.skus.length; i++) {
      if (sku === this.skus[i]) {
        this.skus.splice(i, 1);
        this.saveSkuToLocalStorage();
      }
    }
  }
}
