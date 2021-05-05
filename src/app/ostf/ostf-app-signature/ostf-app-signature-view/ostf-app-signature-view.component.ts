import { Subject } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostf-app-signature-view',
  templateUrl: './ostf-app-signature-view.component.html',
  styleUrls: ['./ostf-app-signature-view.component.scss']
})
export class OstfAppSignatureViewComponent implements OnInit {

   // subjects
   private unsubscribe$ = new Subject();

   // form(s)
   viewSignatureForm: FormGroup;
 
   // properties
 
   constructor(
     private fb: FormBuilder,
    
   ) { }
   /**
  * Getter methods to access formcontrols 
  *    
  */
   get designation() { return this.viewSignatureForm.get('designation'); }
   get title() { return this.viewSignatureForm.get('title'); }
   get signatureOn() { return this.viewSignatureForm.get('signatureOn'); }
 
   /**
    * Handles initialization tasks
    * 1. Builds reactive form
    * 2. Subscribe to application profile changes subject
    * 3. Subscribe to reactive form's control value changes to reset validations and values
    *
    */
   ngOnInit(): void {
     this.buildCreateProjectForm();
     this.subscribeToControlValueChanges();
   }
 
   /**
   * Build reactive form
   *
   */
   buildCreateProjectForm() {
     this.viewSignatureForm = this.fb.group({
       designation: [""],
       title: [""],
       signatureOn: [""],
     });
   }
  
   /**
   * Subscribing to reactive form control's value changes
   *  1. subscribe to agencyType changes
   *  2. subscribe to sharedFacilities flag changes
   *
   */
   subscribeToControlValueChanges() {
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
