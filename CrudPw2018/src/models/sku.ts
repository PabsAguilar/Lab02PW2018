import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
export class Sku {
  constructor(
    public sku: string = "",
    public description: string = "",
    public createDate: NgbDateStruct = null,
    public image: string = "",
    public family: string = "Select family"
  ) {}
}
