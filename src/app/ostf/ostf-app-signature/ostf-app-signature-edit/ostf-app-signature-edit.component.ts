import { OstfAppSignatureService } from './../ostf-app-signature.service';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostf-app-signature-edit',
  templateUrl: './ostf-app-signature-edit.component.html',
  styleUrls: ['./ostf-app-signature-edit.component.scss']
})
export class OstfAppSignatureEditComponent implements OnInit {

  // subjects
  private unsubscribe$ = new Subject();
  // form(s)
  editSignatureForm: FormGroup;

  // properties
  signatureDetails: [] = [];

  constructor(
    private fb: FormBuilder,
    private ostfSignature: OstfAppSignatureService,
  ) { }
  /**
 * Getter methods to access formcontrols 
 *    
 */
  get designation() { return this.editSignatureForm.get('designation'); }
  get title() { return this.editSignatureForm.get('title'); }
  get signatureOn() { return this.editSignatureForm.get('signatureOn'); }

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
    this.editSignatureForm = this.fb.group({
      designation: ["", [Validators.required]],
      title: ["", [Validators.required]],
      signatureOn: ["", Validators.required],
    });
  }
 

  /**
* Set control values 
*
*/
  

  /**
  * Subscribing to reactive form control's value changes
  *  1. subscribe to agencyType changes
  *  2. subscribe to sharedFacilities flag changes
  *
  */
  subscribeToControlValueChanges() {
  }

  /**
  * Submit the form performs following actions,
  * 1. Check if form is valid to submit
  * 2. Stop if form is invalid
  * 3. Save signature
  * 
  */
   onSubmit() {
    if (!this.editSignatureForm.valid) {
      return;
    } else {
      this.ostfSignature.openSnackBar("Application saved Successfully", "");
    }
  }


 

  /**
  * Return error for a given validator
  * 
  */
  public errorHandling = (control: string, error: string) => {
    return this.editSignatureForm.controls[control].hasError(error);
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
