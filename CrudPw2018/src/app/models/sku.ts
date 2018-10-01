import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export interface Sku {
    sku: string;
    description: string;
    createDate: NgbDateStruct;
    image: string;
    family: string;
    hide: boolean;

}
