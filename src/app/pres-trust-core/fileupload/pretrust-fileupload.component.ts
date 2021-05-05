import { Component, Input, Output, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup } from '@angular/forms';
import { Subject, iif, Observable } from 'rxjs';
import { takeUntil, mergeMap } from 'rxjs/operators';

import { remove } from "lodash";

import { EventEmitter } from 'protractor';

@Component({
  selector: 'pretrust-fileupload',
  templateUrl: 'pretrust-fileupload.component.html',
})
export class FileUploadComponent implements OnDestroy {

 
  @Input() readonly: boolean;

  // @Output() onFileDocumentsChange = new EventEmitter();

  // @Output() onFileDocumentsChange = new EventEmitter();



  
  private unsubscribe$ = new Subject();

  

  constructor(
  
    private dialog: MatDialog
  ) {
    this.readonly = false;

  }

  /**
  * File Upload Dialog handler
  * 1. Set ostfBlobStorageInput data to dialog.
  * 2. Get data Changes on Dialog Close.
  *
  */
 
  /**
  * Triggers the unsubscribe, finalize and clean up subject streams
  *
  */
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}