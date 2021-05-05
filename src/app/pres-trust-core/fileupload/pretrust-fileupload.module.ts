import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from "./pretrust-fileupload.component";
import { FileUploadDialogComponent } from "./fileupload-dialog.component";
import { SharedModule } from 'app/shared/shared.module';
import { OstfSharedModule } from "@ostf/ostf-shared/ostf-shared.module";


@NgModule({
    declarations: [ FileUploadComponent,FileUploadDialogComponent ],
    exports: [ FileUploadComponent,FileUploadDialogComponent],
    imports: [
      CommonModule,
      SharedModule,
      OstfSharedModule
    ],
    providers: []
  })
  export class PresTrustFileUploadModule { }