import { Component, OnInit } from '@angular/core';
import { ModalService } from './../_modal';
import { MatTableDataSource } from '@angular/material/table';

export interface ListOfStructuresModel {
  structureId: number;
  structures: number;
  sqFoot: number;
  proposedUse: number;
  tobedemolished: boolean;
  costOfDemolition: number;
  demolitioncomplete: boolean;
  reimbursementCost: number;
}
const ELEMENT_DATA: ListOfStructuresModel[] = [
  // { structureId: 0, structures: 0, sqFoot: 0, proposedUse: 0, tobedemolished: true, costOfDemolition: 0, demolitioncomplete: true, reimbursementCost: 0 },
  // { structureId: 1, structures: 0, sqFoot: 0, proposedUse: 0, tobedemolished: true, costOfDemolition: 0, demolitioncomplete: true, reimbursementCost: 0 },
  // { structureId: 2, structures: 0, sqFoot: 0, proposedUse: 0, tobedemolished: true, costOfDemolition: 0, demolitioncomplete: true, reimbursementCost: 0 },
];

@Component({
  selector: 'app-ostf-app-site-characteristics-view',
  templateUrl: './ostf-app-site-characteristics-view.component.html',
  styleUrls: ['./ostf-app-site-characteristics-view.component.scss']
})
export class OstfAppSiteCharacteristicsViewComponent implements OnInit {

  public displayedColumns: string[] = ['structures', 'sqFoot', 'proposedUse', 'tobedemolished', 'costOfDemolition', 'demolitioncomplete', 'reimbursementCost', 'actions'];
  public dataSource = new MatTableDataSource();
  public listOfStructuresModel: ListOfStructuresModel;
  public add: boolean = true;
  public edit_id: boolean = false;
  public structureArr: ListOfStructuresModel[] = [];
  public index: number;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.objectInitialize();
  }

  objectInitialize() {
    this.listOfStructuresModel = {
      structureId: 0,
      structures: null,
      sqFoot: null,
      proposedUse: null,
      tobedemolished: false,
      costOfDemolition: null,
      demolitioncomplete: false,
      reimbursementCost: null
    }
  }

  fileChange(a) {

  }
  onFileSelected() {

  }

  //model dailog close and open methods for Project
  openModal(id: string, flag: string, index: number) {
    if (flag === "edit") {
      this.add = false;
      this.edit_id = true;
      this.index = index;
      this.listOfStructuresModel = Object.assign({}, this.structureArr[index]);
    }
    else if (flag === "add") {
      this.objectInitialize();
      this.add = true;
      this.edit_id = false;
    }
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  addStructure() {
    this.structureArr = this.dataSource.data as ListOfStructuresModel[];
    this.structureArr.push(Object.assign({}, this.listOfStructuresModel));
    console.log(this.structureArr);
    this.dataSource = new MatTableDataSource(this.structureArr);
  }

  update() {
    for (let i = 0; i < this.structureArr.length; i++) {
      if (i === this.index) {
        this.structureArr[i] = Object.assign({}, this.listOfStructuresModel);
        this.dataSource = new MatTableDataSource(this.structureArr);
      }
    }
  }

  remove(i: number) {
    debugger;
    this.structureArr.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.structureArr);
  }

}
