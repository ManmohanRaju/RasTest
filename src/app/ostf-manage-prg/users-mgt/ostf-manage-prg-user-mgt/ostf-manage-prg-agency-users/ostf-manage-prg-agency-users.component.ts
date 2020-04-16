import { DialogData } from './../../../../ostf/ostf-app-location/ostf-app-location-view/ostf-app-location-view.component';
import { Component, OnInit,Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Location} from '@angular/common';

export interface agencyUsers {
  fullName: string;
  email: string;
  program: string;
  city:string;
  role: string;
  lastInvited:string;
  agency:string;
}

@Component({
  selector: 'app-ostf-manage-prg-agency-users',
  templateUrl: './ostf-manage-prg-agency-users.component.html',
  styleUrls: ['./ostf-manage-prg-agency-users.component.scss']
})
export class OstfManagePrgAgencyUsersComponent implements OnInit {
  public displayedColumns: string[] = ['Full Name','Email','Program','City','Role','Actions'];
  public dataSource =new MatTableDataSource(ELEMENT_DATA);
page="Municipal & Non-Profit Users";
  constructor(private _location:Location,public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  doFilter(e){
    this.dataSource.filter = e.trim().toLocaleLowerCase();
  }
  backClicked() {
    this._location.back();
  }
  openDialog(action,data): void {
    const dialogRef = this.dialog.open(OstfManagePrgAgencyUsersDialog, {
      width: 'auto',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if(action=='Add'&&result){
        ELEMENT_DATA.push(result);
        this.dataSource._updateChangeSubscription();
      }
    
    });
}
openReqs(){
  const dialogRef = this.dialog.open(OstfManagePrgAgencyUsersDialog, {
    width: 'auto',
    // data: data
    position:{right:'0'}
  });
}
editData(action,data,i): void {
  const dialogRef = this.dialog.open(OstfManagePrgAgencyUsersDialog, {
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
  console.log(i);
  ELEMENT_DATA.splice(i,1);
  this.dataSource._updateChangeSubscription();
}
}
const ELEMENT_DATA: agencyUsers[] = [
  {fullName: "Joge Lucky", email: 'joge@gmail.com', program:"Open Space", role: 'Editor',lastInvited:"Last Invited:Jan 02 2020",city:"Boonton",agency: 'Editor'},
  {fullName: "Pinky Lucky", email: 'joge@gmail.com', program:"Open Space", role: 'Editor',lastInvited:"Last Invited:Jan 02 2020",city:"Butler",agency: 'Editor'},
  {fullName: "Anna Strong", email: 'steafen@gmail.com', program: "Open Space", role: 'Editor',lastInvited:"Last Invited:Jan 02 2020",city:"Boonton",agency: 'Editor'},
  
];
@Component({
  selector: 'ostf-manage-prg-agency-users-dialog',
  templateUrl: './ostf-manage-prg-agency-users-dialog.html',
})
export class OstfManagePrgAgencyUsersDialog {
roleArr=["Editor","Program Manager"];
agencyArr=["Editor","Program Manager"];

  constructor( 
    public dialogRef: MatDialogRef<OstfManagePrgAgencyUsersDialog>,
  @Inject(MAT_DIALOG_DATA) public data: agencyUsers){
    }
    addUser(data): void {
      this.dialogRef.close(data);
    }
}
