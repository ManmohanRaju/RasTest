import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SessionStorageService } from './../../pres-trust-core/services/session-storage.service';
import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Index {
  index: number
}
@Component({
  selector: 'app-ostf-create-application',
  templateUrl: './ostf-create-app.component.html',
  styleUrls: ['./ostf-create-app.component.scss']
})
export class OstfCreateApplicationComponent implements OnInit {
  selected = 1;
  index: number;
  public createAppForm: FormGroup;
  public applications: any = [];
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private sessionService: SessionStorageService,
    private fb: FormBuilder
  ) { }

  /**
* Getter methods to access formcontrols 
*    
*/
  get applicationTitle() {
    return this.createAppForm.get('applicationTitle');
  }

  get agencyId() {
    return this.createAppForm.get('agencyId');
  }

  get agencyType() {
    return this.createAppForm.get('agencyType');
  }

  get agencyAddress() {
    return this.createAppForm.get('agencyAddress');
  }

  ngOnInit() {
    this.buildCreateAppForm();
    this.getApplications();
  }

  /**
 * Build reactive form
 *
 */
  buildCreateAppForm() {
    this.createAppForm = this.fb.group({
      applicationTitle: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(128)]],
      agencyId: [null, [Validators.required]],
      agencyType: [null, [Validators.required]],
      agencyAddress: [null]
    });
  }
  change(i) {
    this.selected = i;
    if (this.selected == 0) {
      this.openDialog(i);
    }
  }
  openDialog(i): void {
    this.index = i;
    const dialogRef = this.dialog.open(OstfCreateApplicationDialog, {
      width: '500px',
      data: i,
    });

    dialogRef.afterClosed().subscribe(i => {
      this.selected = i;
      if (this.selected == 0) {
        this.router.navigate(['/applications']);
      }
    });
  }

  /**
 * Return error for a given validator
 * 
 */
  public errorHandling = (control: string, error: string) => {
    return this.createAppForm.controls[control].hasError(error);
  }

  getApplications() {
    this.applications = this.sessionService.getApplications();
  }
  createApplication() {
    if (this.createAppForm.invalid) {
      return;
    } else {
      let obj = { "projectId": this.randFun(101, 499), "program": "Open Space", "projectTitle": this.applicationTitle.value, "applicant": this.applicationTitle.value, "fundingYear": "2021", "municipality": "","address": this.agencyAddress.value,
      "agencyType": this.agencyType.value,"agencyName": this.agencyId.value, "status": "Pending" };
      this.applications.push(obj);
      this.sessionService.setApplications(this.applications);
      this.sessionService.setApplicationsSubject(this.applications);
      this.sessionService.setUserId(obj.projectId);
      this.router.navigate(["/ostf/project/projedit/"]);
    }
  }
  randFun(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
@Component({
  selector: 'app-ostf-create-application-dialog',
  templateUrl: './ostf-create-app-dialog.html',

})
export class OstfCreateApplicationDialog {
  constructor(public dialogRef: MatDialogRef<OstfCreateApplicationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Index) {
  }
  confirm(data): void {
    this.dialogRef.close(data);
  }
}