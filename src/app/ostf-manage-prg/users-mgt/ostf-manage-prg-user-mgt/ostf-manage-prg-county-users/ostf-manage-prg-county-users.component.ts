import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface countyUsers {
  fullName: string;
  email: string;
  program: string;
  role: string;
  lastInvited:string;
}
const ELEMENT_DATA: countyUsers[] = [
  {fullName: "Joge Lucky", email: 'joge@gmail.com', program:"Open Space", role: 'Editor',lastInvited:"Last Invited:Jan 02 2020"},
  {fullName: "Pinky Lucky", email: 'joge@gmail.com', program:"Open Space", role: 'Editor',lastInvited:"Last Invited:Jan 02 2020"},
  {fullName: "Anna Strong", email: 'steafen@gmail.com', program: "Open Space", role: 'Editor',lastInvited:"Last Invited:Jan 02 2020"},
  
];
@Component({
  selector: 'app-ostf-manage-prg-county-users',
  templateUrl: './ostf-manage-prg-county-users.component.html',
  styleUrls: ['./ostf-manage-prg-county-users.component.scss']
})
export class OstfManagePrgCountyUsersComponent implements OnInit {
  public displayedColumns: string[] = ['Full Name','Email','Program','Role','Actions'];

  public dataSource = new MatTableDataSource(ELEMENT_DATA);
  page="County Users";

  constructor() { }

  ngOnInit(): void {
  }
  getData(e){
    this.dataSource.filter = e.trim().toLocaleLowerCase();
  }
}
