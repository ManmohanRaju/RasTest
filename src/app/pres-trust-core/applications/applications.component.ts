import { Router } from '@angular/router';
import { SessionStorageService } from './../services/session-storage.service';
import { MatSort } from '@angular/material/sort';
import { PresTrustCoreService } from './../pres-trust-core.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';




export interface Projects {
  projectId: string;
  program: string;
  projectTitle: string;
  applicant: string;
  fundingYear: string;
  municipality: string
  status: string;
}


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  applications: [] = [];
  public displayedColumns: string[] = ['projectId', 'applicant', 'program', 'municipality', 'fundingYear', 'status'];
  public dataSource = new MatTableDataSource(this.applications);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private sessionService: SessionStorageService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getApplications();
  }
  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  getApplications() {
    // this.sessionService.getApplications().subscribe((res: []) => {
    //   if (res) {
        this.applications = this.sessionService.getApplications();
        this.dataSource = new MatTableDataSource(this.applications);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    //   }
    // })
  }

  getApplicationDetails(applicationId){
this.router.navigate(["/ostf/project/projedit"]);
this.sessionService.setUserId(applicationId);
  }


}
