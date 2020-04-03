import { Component, OnInit } from '@angular/core';

export interface DocumentChecklist {
  structureId: number;
  structures: number;
  sqFoot: number;
  proposedUse: number;
  tobedemolished: boolean;
  costOfDemolition: number;
  demolitioncomplete: boolean;
  reimbursementCost: number;
}
const ELEMENT_DATA: DocumentChecklist[] = [
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

  public displayedColumns: string[] = ['structureId', 'structures', 'sqFoot', 'proposedUse', 'tobedemolished', 'costOfDemolition', 'demolitioncomplete', 'reimbursementCost'];
  public dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }
  fileChange(a) {

  }
  onFileSelected() {

  }

}
