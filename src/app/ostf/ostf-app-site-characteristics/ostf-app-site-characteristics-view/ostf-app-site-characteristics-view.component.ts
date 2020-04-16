import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { OstfAppSiteCharacteristicsService } from '../ostf-app-site-characteristics.service';

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

  constructor(public dialog: MatDialog,
    public service: OstfAppSiteCharacteristicsService) { }

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

  remove(i: number) {
    this.service.listOfStructures.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.service.listOfStructures);
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(OstfAppSiteCharacteristicsViewDialog, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.dataSource = new MatTableDataSource(this.service.listOfStructures);
    });
  }

  openDialog(row): void {
    this.service.populateForm(row);
    const dialogRef = this.dialog.open(OstfAppSiteCharacteristicsViewDialog, {
      width: 'auto'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dataSource = new MatTableDataSource(this.service.listOfStructures);
    });
  }

}


// popup dialog component
@Component({
  selector: 'ostf-app-site-characteristics-view-dialog',
  templateUrl: 'ostf-app-site-characteristics-view-dialog.html',
})
export class OstfAppSiteCharacteristicsViewDialog {

  favoriteSeason: String;
  seasons: String[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor(public dialogRef: MatDialogRef<OstfAppSiteCharacteristicsViewDialog>,
    public service: OstfAppSiteCharacteristicsService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.service.getEmployees();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('structureId').value)
        this.service.insertEmployee(this.service.form.value);
      else
        this.service.updateEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
