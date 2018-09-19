import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
export class Sku {
  constructor(
    public firstName: string = "",
    public lastName: string = "",
    public dob: NgbDateStruct = null,
    public email: string = "",
    public password: string = "",
    public country: string = "Select country"
  ) {}
}
