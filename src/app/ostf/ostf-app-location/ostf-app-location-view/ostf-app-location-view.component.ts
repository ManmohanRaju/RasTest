import { Projects } from './../../../pres-trust-core/applications/applications.component';
import { MatTableDataSource } from '@angular/material/table';
// import { OstfAppLocationModalComponent } from './ostf-app-location-modal.component';
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import * as $ from 'jquery';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-ostf-app-location-view',
  templateUrl: './ostf-app-location-view.component.html',
  styleUrls: ['./ostf-app-location-view.component.scss']
})
export class OstfAppLocationViewComponent implements OnInit {
addressArr=[];
obj1:any={};
index;
add=true;
edit_id=false;
public displayedColumns: string[] = [ 'Municipality', 'Block', 'Lot','Partial','Section','Acres','Acres to be Aquired','Actions'];
  public dataSource:any =new MatTableDataSource();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.dataSource=this.addressArr;

  }
  addAddress(){
    this.add=true;
    this.edit_id=false;
    this.addressArr.push(this.obj1);
    this.dataSource = new MatTableDataSource(this.addressArr);   
    this.obj1={};
  }
  remove(i){
this.addressArr.splice(i);
this.dataSource = new MatTableDataSource(this.addressArr);   
  }
  edit(i){
    this.add=false;
    this.edit_id=true;
    this.index=i;
    this.obj1.municipality = this.addressArr[i].municipality;
    this.obj1.block = this.addressArr[i].block;
    this.obj1.lot = this.addressArr[i].lot;
    this.obj1.section = this.addressArr[i].section;
    this.obj1.acres = this.addressArr[i].acres;
    this.obj1.aquired = this.addressArr[i].aquired;
    console.log(this.obj1.municipality);

// this.dataSource = new MatTableDataSource(this.addressArr);   
  }
  update(){
    for(let i = 0; i < this.addressArr.length; i++) {
      if(i == this.index) {
        this.addressArr[i] = this.obj1;
this.dataSource = new MatTableDataSource(this.addressArr);   
this.obj1={};
        // this.obj1 = {};
      }
    }
  }
  onFileSelected(){
    
  }
}

