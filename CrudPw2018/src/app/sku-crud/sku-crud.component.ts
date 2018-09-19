import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Sku } from '../../models/sku';

@Component({
  selector: "app-sku-crud",
  templateUrl: './sku-crud.component.html',
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
  submitType = "Save";
  // It maintains table row index based on selection.
  selectedRow: number;
  // It maintains Array of countries.
  countries: string[] = ["US", "UK", "India", "UAE"];

  closeResult: string;

  constructor(private modalService: NgbModal) {
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

  open(content) {
    this.regModel = new Sku();
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  onEdit(content, index: number) {
    this.regModel = this.skus[index];
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  onDelete(index: number) {}

  onCancel() {}

  ngOnInit() {}

  onChangeCountry(country: string) {
    // Assign corresponding selected country to model.
    this.regModel.country = country;
  }
}
