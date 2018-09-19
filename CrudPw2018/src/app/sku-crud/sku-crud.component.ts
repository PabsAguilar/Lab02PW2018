import { Component, OnInit } from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Sku } from "../../models/sku";

@Component({
  selector: "app-sku-crud",
  templateUrl: "./sku-crud.component.html",
  styleUrls: ["./sku-crud.component.css"]
})
export class SkuCRUDComponent implements OnInit {
  // It maintains list of Registrations
  skus: Sku[] = [];
  // It maintains registration Model
  regModel: Sku;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = "Save";
  // It maintains table row index based on selection.
  selectedRow: number;
  // It maintains Array of countries.
  countries: string[] = ["US", "UK", "India", "UAE"];
  constructor() {
    this.skus.push(
      new Sku(
        "Johan",
        "Peter",
        { year: 1980, month: 5, day: 12 },
        "johan@gmail.com",
        "johan123",
        "UK"
      )
    );
    this.skus.push(
      new Sku(
        "Mohamed",
        "Tariq",
        { year: 1975, month: 12, day: 3 },
        "tariq@gmail.com",
        "tariq123",
        "UAE"
      )
    );
    this.skus.push(
      new Sku(
        "Nirmal",
        "Kumar",
        { year: 1970, month: 7, day: 25 },
        "nirmal@gmail.com",
        "nirmal123",
        "India"
      )
    );
  }

  // This method associate to New Button.
  onNew() {
    // Initiate new registration.
    this.regModel = new Sku();
    // Change submitType to 'Save'.
    this.submitType = "Save";
    // display registration entry section.
    this.showNew = true;
  }

  onEdit(index: number) {}

  onDelete(index: number) {}

  onCancel() {}

  ngOnInit() {}

  onChangeCountry(country: string) {
    // Assign corresponding selected country to model.
    this.regModel.country = country;
  }
}
