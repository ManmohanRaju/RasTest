import { OstfManagePrgModule } from './../../../ostf-manage-prg.module';
import { Component, OnInit,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Location} from '@angular/common';


export interface countyUsers {
  fullName: string;
  email: string;
  program: string;
  role: string;
  lastInvited:string;
}

@Component({
  selector: 'app-ostf-manage-prg-county-users',
  templateUrl: './ostf-manage-prg-county-users.component.html',
  styleUrls: ['./ostf-manage-prg-county-users.component.scss']
})
export class OstfManagePrgCountyUsersComponent implements OnInit {
  public displayedColumns: string[] = ['Full Name','Email','Program','Role','Actions'];
  public dataSource =new MatTableDataSource(ELEMENT_DATA);
  page="County Users";
  newArr=[];
  countyUsers=[];
    constructor(public dialog: MatDialog,private _location:Location) {
    console.log(this.countyUsers);

     }

  ngOnInit(): void {}
  doFilter(e){
    this.dataSource.filter = e.trim().toLocaleLowerCase();
  }
  backClicked() {
    this._location.back();
  }
  openDialog(action,data): void {
    const dialogRef = this.dialog.open(OstfManagePrgCountyUsersDialog, {
      width: 'auto',
      data: data,
    });
   
    dialogRef.afterClosed().subscribe(result => {
        ELEMENT_DATA.push(result);
        this.dataSource=new MatTableDataSource(ELEMENT_DATA);
      
    });
  }
  editData(action,data,i): void {
    const dialogRef = this.dialog.open(OstfManagePrgCountyUsersDialog, {
      width: 'auto',
      data: {fullName:data.fullName,email:data.email,role:data.role}
    });
   
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        ELEMENT_DATA[i] = result;
        this.dataSource._updateChangeSubscription();
      }
    });
  }
  delete(i){
    console.log(i)
    ELEMENT_DATA.splice(i);
    this.dataSource=new MatTableDataSource(ELEMENT_DATA);
  }
  // editData(data){
  //   const dialogRef = this.dialog.open(OstfManagePrgCountyUsersDialog, {
  //     width: 'auto',
  //     data: {fullName:data.fullName,email:data.email,role:data.role}
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //  this.dataSource = new MatTableDataSource(result);

  //   }); 
  // }
  addData(){

  }
}
@Component({
  selector: 'ostf-manage-prg-county-users-dialog',
  templateUrl: 'ostf-manage-prg-county-users-dialog.html',
})
export class OstfManagePrgCountyUsersDialog {
 
roleArr=["Editor","Program Manager"];
// countyUsers=[];
  constructor( 
  public dialogRef: MatDialogRef<OstfManagePrgCountyUsersDialog>,
@Inject(MAT_DIALOG_DATA) public data: countyUsers){
  console.log(data);
  }
addUser(data): void {
  this.dialogRef.close(data);
}
}
const ELEMENT_DATA: countyUsers[] = [
  {fullName: "Joge Lucky", email: 'joge@gmail.com', program:"Open Space", role: 'Editor',lastInvited:"Last Invited:Jan 02 2020"},
  {fullName: "Pinky Lucky", email: 'joge@gmail.com', program:"Open Space", role: 'Editor',lastInvited:"Last Invited:Jan 02 2020"},
  {fullName: "Anna Strong", email: 'steafen@gmail.com', program: "Open Space", role: 'Editor',lastInvited:"Last Invited:Jan 02 2020"},
  
];