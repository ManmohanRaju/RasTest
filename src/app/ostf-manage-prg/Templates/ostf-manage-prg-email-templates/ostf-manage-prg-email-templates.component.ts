import { OstfManagePrgModule } from './../../ostf-manage-prg.module';
import { OstfManagePrgService } from './../../ostf-manage-prg.service';
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData{
title:string,
content:string
}

@Component({
  selector: 'app-ostf-manage-prg-email-templates',
  templateUrl: './ostf-manage-prg-email-templates.component.html',
  styleUrls: ['./ostf-manage-prg-email-templates.component.scss']
})
export class OstfManagePrgEmailTemplatesComponent implements OnInit {
page="Email Templates";
cardData=[];

  constructor(private ManagePrgSer:OstfManagePrgService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ManagePrgSer.getData().subscribe(res=>{
     this.cardData = res;
    })
  }
  openDialog(data): void {
    const dialogRef = this.dialog.open(OstfManagePrgEmailTemplateDialog, {
      width: 'auto',
      data: {title:data.title,content:data.content}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
@Component({
  selector: 'ostf-manage-prg-email-template-dialog',
  templateUrl: 'ostf-manage-prg-email-template-dialog.html',
})
export class OstfManagePrgEmailTemplateDialog {

  constructor(
    public dialogRef: MatDialogRef<OstfManagePrgEmailTemplateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}