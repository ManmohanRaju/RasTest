import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomMaterialModule } from './../../../custom-material/custom-material.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

interface ProjectId {
  value: string;
  viewValue: string;
}

export interface RevenueExpenses {
  projectId: number;
  status: string;
  projectname: string;
  municipality: string;
  PAM_PIN: string;
  PAM_PIN_status: string;
  GIS_match: boolean;
}

const ELEMENT_DATA: RevenueExpenses[] = [
  { projectId: 21, status: 'Preserved', projectname: 'project1', municipality: 'Luce', PAM_PIN: '1407_10_107', PAM_PIN_status: 'Preserved', GIS_match: true },
  { projectId: 22, status: 'Pending', projectname: 'project2', municipality: 'Black River Greenway', PAM_PIN: '1408_10_107', PAM_PIN_status: 'Preserved', GIS_match: false },
  { projectId: 23, status: 'Other', projectname: 'project3', municipality: 'Luce', PAM_PIN: '1409_10_107', PAM_PIN_status: 'Preserved', GIS_match: true },
  { projectId: 24, status: 'Other', projectname: 'project4', municipality: 'Luce', PAM_PIN: '1409_10_107', PAM_PIN_status: 'Preserved', GIS_match: true },
  { projectId: 25, status: 'Other', projectname: 'project5', municipality: 'Luce', PAM_PIN: '1409_10_107', PAM_PIN_status: 'Preserved', GIS_match: true },
  { projectId: 26, status: 'Other', projectname: 'project6', municipality: 'Luce', PAM_PIN: '1409_10_107', PAM_PIN_status: 'Preserved', GIS_match: false },
  { projectId: 27, status: 'Other', projectname: 'project7', municipality: 'Luce', PAM_PIN: '1409_10_107', PAM_PIN_status: 'Preserved', GIS_match: false },
  { projectId: 28, status: 'Other', projectname: 'project8', municipality: 'Luce', PAM_PIN: '1409_10_107', PAM_PIN_status: 'Preserved', GIS_match: true },
  { projectId: 29, status: 'Other', projectname: 'project9', municipality: 'Luce', PAM_PIN: '1409_10_107', PAM_PIN_status: 'Preserved', GIS_match: false },
  { projectId: 30, status: 'Other', projectname: 'project10', municipality: 'Luce', PAM_PIN: '1409_10_107', PAM_PIN_status: 'Preserved', GIS_match: true },
  { projectId: 31, status: 'Other', projectname: 'project11', municipality: 'Luce', PAM_PIN: '1409_10_107', PAM_PIN_status: 'Preserved', GIS_match: true },
  { projectId: 32, status: 'Other', projectname: 'project12', municipality: 'Luce', PAM_PIN: '1409_10_107', PAM_PIN_status: 'Preserved', GIS_match: false },
];

@Component({
  selector: 'app-ostf-manage-prg-parcels',
  templateUrl: './ostf-manage-prg-parcels.component.html',
  styleUrls: ['./ostf-manage-prg-parcels.component.scss']
})
export class OstfManagePrgParcelsComponent implements OnInit {

  public displayedColumns: string[] = ['projectId', 'status', 'projectname', 'municipality', 'PAM_PIN', 'PAM_PIN_status', 'GIS_match', 'edit'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public selectedOption: string = 'select';
  public projectIds: ProjectId[] = [];
  public projectStatus: ProjectId[] = [
    { value: 'preserved', viewValue: 'Preserved' },
    { value: 'pending', viewValue: 'Pending' },
    { value: 'other', viewValue: 'Other' }
  ];
  public projectNames: ProjectId[] = [];
  public gisStatus: ProjectId[] = [
    { value: 'true', viewValue: 'true' },
    { value: 'false', viewValue: 'false' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.data.forEach(x => {
      this.projectIds.push({ value: x.projectId.toString(), viewValue: x.projectId.toString() });
      this.projectNames.push({ value: x.projectname.toString(), viewValue: x.projectname.toString() });
    });

  }

  setColor(value: boolean) {
    if (value == true) {
      return 'blue';
    }
    if (value == false) {
      return 'red'
    }
  }

  applyFilter(filterValue: string) {
    const tableFilters = [];
    tableFilters.push({
      id: 'name',
      value: filterValue
    });


    this.dataSource.filter = JSON.stringify(tableFilters);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
