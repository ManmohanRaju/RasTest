import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  email: string;
  role: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', email: 'Hydrogen@gmail.com', role: 'CEO'},
  {name: 'Helium', email: 'Helium@gmail.com',role: 'Manager'},
  {name: 'Lithium', email: 'Lithium@gmail.com', role: 'CEO'},
  {name: 'Beryllium', email: 'Beryllium@gmail.com', role: 'Manager'},
  {name: 'Boron', email: 'Boron@gmail.com', role: 'Manager'},
  {name: 'Carbon', email: 'Carbon@gmail.com', role: 'Manager'},
  {name: 'Nitrogen', email: 'Nitrogen@gmail.com', role: 'Manager'},
  {name: 'Oxygen', email: 'Oxygen@gmail.com', role: 'Manager'},
  {name: 'Fluorine', email: 'Fluorine@gmail.com', role: 'Manager'},
  { name: 'Neon', email: 'Neon@gmail.com', role: 'Manager'},
];
@Component({
  selector: 'app-ostf-app-role-view',
  templateUrl: './ostf-app-role-view.component.html',
  styleUrls: ['./ostf-app-role-view.component.scss']
})

export class OstfAppRoleViewComponent implements OnInit {
  public displayedColumns: string[] = [ 'name', 'email', 'role'];
  public dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
