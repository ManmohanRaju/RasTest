import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ostfBlobstorageDto } from "@ostf/models/ostf-app-blobstorage-model";
import { ostfBlobStorageInput } from "@ostf/models/ostf-app-blobstorage-model";
import { FormGroup } from '@angular/forms';
import { PreTrustFileUploadService } from "./pretrust-fileupload.service";
import { Subject, Observable, observable, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PretrustDocument } from '@pretrustCore/models/pretrust-common';
import { remove } from "lodash";
import { FileIconPipe } from "@ostf/ostf-shared/pipes/ostf-shared.pipe";


@Component({
  selector: 'fileupload-dialog',
  templateUrl: 'fileupload-dialog.html',
  providers: [FileIconPipe]
})
export class FileUploadDialogComponent implements OnDestroy {

  form: FormGroup;
  fileToUpload: File = null;

  pretrustDocs: PretrustDocument[] = [];

  category: string = '';
  applicationId: number = 0;

  // dicPretrustDoc: any = {};
  private unsubscribe$ = new Subject();

  showProgress: boolean = false;

  filetype: any = 'assets/fileext/doc.svg';

  counter = 0;
  progress = 0;

  constructor(
    public uploadService: PreTrustFileUploadService,
    public dialogRef: MatDialogRef<FileUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ostfBlobstorageDto,
    private fileIconPipe: FileIconPipe) {
    dialogRef.disableClose = true;

    this.category = this.data.category;
    this.applicationId = this.data.applicationId;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  /**
   *  Prepare preturst Document File on Trigger
   */
  onAddFile(): void {

    if (this.data.asset.size && this.data.title.trim().length > 0) {

      const fileDoc: PretrustDocument = {
        applicationId: this.data.applicationId,
        asset: this.fileToUpload,
        description: this.data.description,
        documentType: this.data.category,
        title: this.data.title,
        fileName: this.data.saveAsFileName,
        showCommitte: false
      }

      // this.dicPretrustDoc[fileDoc.fileName] = fileDoc;


      this.pretrustDocs.push(fileDoc);

      this.data = new ostfBlobStorageInput();
      this.data.category = this.category;
      this.data.applicationId = this.applicationId;

    }



  }

  /**
   *  Save all Documents on the list
   */

  onSave(): void {
    // this.updateFileUpload();
    this.uploadAll();
  }

  /**
   *  Upload all documents in parallel , once Complete close the dialog window
   */
  uploadAll() {

    this.showProgress = true;

    let successDocs: PretrustDocument[] = [];
    let arFileObservable: Observable<PretrustDocument>[] = [];

    /**
     * Iterate all list of docs and add it to observable array.
     */
    this.pretrustDocs.forEach(doc => {
      const uploadObservable = this.updateFileUpload(doc);
      arFileObservable.push(uploadObservable);

    });

    forkJoin(arFileObservable).subscribe({
      next: (args: any[]) => {
        successDocs = args;
      },
      error: (args: any[]) => {
        // has to validate Later for error handling
        successDocs = args;
      },
      complete: () => {
        //   Close Modal Popup Here ....
        this.dialogRef.close(successDocs);
      }
    });

  }

  onFileSelected(files: FileList) {
    this.fileToUpload = files.item(0);
    this.data.asset = this.fileToUpload;
    this.data.saveAsFileName = this.generateFileName();
    this.data.title = this.fileToUpload.name;
    this.data.description = "";

    this.filetype = this.fileIconPipe.transform(this.fileToUpload.name);
  }
  /**
   * Generate Unique FileName for BlobStorage
   */
  generateFileName() {

    const timeStamp = Math.floor(Math.random() * 100000) + 1; //new Date().getTime();
    const appId = this.data.applicationId;
    const docType = this.data.category.toLowerCase().replace(/\s/g, '-');
    const fileName = this.fileToUpload.name;
    const fileType = fileName.substring(fileName.lastIndexOf('.') + 1);

    return `ostf-${appId}-${docType}-${timeStamp}.${fileType}`;
  }

  /**
   * Observable to do
   * 
   * 1. Upload doc to Azure blob API
   * 2. Update doc to Pretrust API
   * 
   * @param pretrustDoc 
   */
  updateFileUpload(pretrustDoc: PretrustDocument): Observable<PretrustDocument> {

    return new Observable<PretrustDocument>(observer => {

      let form_data: FormData = new FormData();

      /**
       * Observable notification
       */
      const sendData = () => {
        observer.next(pretrustDoc);
        // For Showing Progress
        this.progress = (++this.counter * 100) / this.pretrustDocs.length;
        observer.complete();
        observer.unsubscribe(); // Dispose the Observer
      }

      const azblobStorage: ostfBlobStorageInput = new ostfBlobStorageInput();
      azblobStorage.applicationId = this.applicationId;
      azblobStorage.category = this.category;
      azblobStorage.asset = pretrustDoc.asset;
      azblobStorage.category = pretrustDoc.documentType;
      azblobStorage.saveAsFileName = pretrustDoc.fileName;
      azblobStorage.title = pretrustDoc.title;
      azblobStorage.description = pretrustDoc.description;

      /**
       * Prepare Formdata object for Azure blob Api
       */
      for (const [key, value] of Object.entries(azblobStorage)) {
        if (key !== "applicationId") {
          form_data.set(key, value);
        }

      }

      // Upload File using Azure Blob API
      this.uploadService.uploadFiletoAzBlob(form_data)
        .pipe(takeUntil(this.unsubscribe$)) // unsubsribe original observable on unsubscribe$ emmission
        .subscribe(response => {
          if (response) {

            // Save data using prestrust API
            this.uploadService.saveDocumentDetails(pretrustDoc)
              .pipe(takeUntil(this.unsubscribe$)) // unsubsribe original observable on unsubscribe$ emmission
              .subscribe((response: any) => {
                if (response) {
                  pretrustDoc.id = response.id;
                  sendData();
                }
              }, error => {
                // sendData();
              });

          }
        }, error => {
          // Temporary Only Later Will remove Code
          this.uploadService.saveDocumentDetails(pretrustDoc)
            .pipe(takeUntil(this.unsubscribe$)) // unsubsribe original observable on unsubscribe$ emmission
            .subscribe((response: any) => {
              if (response) {
                pretrustDoc.id = response.id;
                sendData();
              }
            }, error => {
              // sendData();
            });
        });



    });


  }

  /**
   * Remove file from the list
   * @param doc PretrustDoc 
   */
  onRemoveDoc(doc) {

    remove(this.pretrustDocs, fileDoc => {
      return fileDoc.fileName === doc.fileName;
    });

  }


  /**
    * Triggers the unsubscribe, finalize and clean up subject streams
    *
    */
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}