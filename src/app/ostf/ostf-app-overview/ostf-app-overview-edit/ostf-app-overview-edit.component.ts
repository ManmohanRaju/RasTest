import { OstfAppOverviewService } from './../ostf-app-overview.service';
import { OstfAppPriorityLevelEnum } from './../../models/ostf-priority-level-enum';
import { OstfAppAcquisitionTypeEnum } from './../../models/ostf-auisition-type-enum';
import { OstfAppRecreationTypeEnum } from './../../models/ostf-recreation-type-enum';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostf-app-overview-edit',
  templateUrl: './ostf-app-overview-edit.component.html',
  styleUrls: ['./ostf-app-overview-edit.component.scss']
})
export class OstfAppOverviewEditComponent implements OnInit {
// subjects
private unsubscribe$ = new Subject();


// form(s)
editOverviewForm: FormGroup;

// selected option(s), selected record(s), selected value(s)
OstfAppRecreationTypeEnum = OstfAppRecreationTypeEnum;
OstfAppAcquisitionTypeEnum = OstfAppAcquisitionTypeEnum;
OstfAppPriorityLevelEnum = OstfAppPriorityLevelEnum;
selectedOptionRecreationType: string = "";
selectedOptionAquisitionType: string = "";
selectedPriorApplicationType: string = "true";
selectedPublicAccessType: string = "true";
selectedEasementValueType: string = "true";
selectedPriorityApplicationType: string = "true";






constructor(
  private fb: FormBuilder,
 private ostfOverview:OstfAppOverviewService
) { }

/**
* Getter methods to access formcontrols 
*    
*/
get recreationType() { return this.editOverviewForm.get('recreationType'); }
get priorityApplication() { return this.editOverviewForm.get('priorityApplication'); }
get priorityLevel() { return this.editOverviewForm.get('priorityLevel'); }
get priorApplication() { return this.editOverviewForm.get('priorApplication'); }
get priorApplicationYear() { return this.editOverviewForm.get('priorApplicationYear'); }
get priorApplicationName() { return this.editOverviewForm.get('priorApplicationName'); }
get recreationalFacilities() { return this.editOverviewForm.get('recreationalFacilities'); }
get activeFacilities() { return this.editOverviewForm.get('activeFacilities'); }
get acquisitionType() { return this.editOverviewForm.get('acquisitionType'); }
get easementValue() { return this.editOverviewForm.get('easementValue'); }
get easementValueDetermined() { return this.editOverviewForm.get('easementValueDetermined'); }
get easementCompliance() { return this.editOverviewForm.get('easementCompliance'); }
get easements() { return this.editOverviewForm.get('easements'); }
get publicAccess() { return this.editOverviewForm.get('publicAccess'); }
get accessExplained() { return this.editOverviewForm.get('accessExplained'); }
get residualProperty() { return this.editOverviewForm.get('residualProperty'); }

/**
* Handles initialization tasks
* 1. Builds reactive form
* 2. Subscribe to application profile changes subject
* 3. Subscribe to reactive form's control value changes to reset validations and values
*
*/
ngOnInit() {
  this.buildProjectForm();
  this.subscribeToControlValueChanges();
}

/**
* Build reactive form
*
*/
buildProjectForm() {
  this.editOverviewForm = this.fb.group({
    recreationType: ["", [Validators.required]],
    priorityApplication: [""],
    priorityLevel: ["", [Validators.required]],
    priorApplication: [""],
    priorApplicationYear: ["", [Validators.required, Validators.maxLength(4)]],
    priorApplicationName: [""],
    recreationalFacilities: ["", [Validators.required, Validators.maxLength(2000)]],
    activeFacilities: ["", [Validators.required, Validators.maxLength(2000)]],
    acquisitionType: ["", [Validators.required]],
    easementValue: [""],
    easementValueDetermined: ["", [Validators.required, Validators.maxLength(2000)]],
    easementCompliance: ["", [Validators.required, Validators.maxLength(2000)]],
    easements: ["", [Validators.required, Validators.maxLength(200)]],
    publicAccess: [""],
    accessExplained: ["", [Validators.required, Validators.maxLength(2000)]],
    residualProperty: ["", [Validators.required, Validators.maxLength(2000)]],
  })
}







/**
* Subscribing to reactive form control's value changes
*  1. subscribe to recreation type changes
*  2. subscribe to auisition type changes
*  3. subscribe to prior application  changes
*  4. subscribe to public access flag  changes
*  5. subscribe to easement value flag  changes
*  6. subscribe to priority application  changes
*
*/
subscribeToControlValueChanges() {
  this.subscribeToRecreationTypeOptionChange();
  this.subscribeToAcquisitionTypeOptionChange();
  this.subscribeToPriorApplicationOptionChange();
  this.subscribeToPublicAccessOptionChange();
  this.subscribeToEasementValueOptionChange();
  this.subscribeToPriorityApplicationOptionChange();
}

/**
* Subscribe to recreaion type option changes
* 1. Add/Remove Validators based on recreation type value.
* 2. Recalculate the value and validation status.
* 
*/
subscribeToRecreationTypeOptionChange() {
  this.recreationType.valueChanges
    .subscribe((option: any) => {
      this.selectedOptionRecreationType = option;
      this.recreationalFacilities.clearValidators();
      this.activeFacilities.clearValidators();
      switch (option.toString()) {
        case OstfAppRecreationTypeEnum.PRIMARILY_ACTIVE_RECREATION:
        case OstfAppRecreationTypeEnum.BOTH:
          this.recreationalFacilities.setValidators([Validators.required, Validators.maxLength(2000)]);
          this.activeFacilities.setValidators([Validators.required, Validators.maxLength(2000)]);
          break;
        case OstfAppRecreationTypeEnum.PRIMARILY_PASSIVE_RECREATION:
          this.recreationalFacilities.setValue('');
          this.activeFacilities.setValue('');
          break;
        case OstfAppRecreationTypeEnum.NONE:
          this.recreationType.setValue('');
          this.recreationType.updateValueAndValidity(
            { onlySelf: true, emitEvent: false }
          );
          break;
        default:
          break;
      }
      this.recreationalFacilities.updateValueAndValidity();
      this.activeFacilities.updateValueAndValidity();

    });
}

/**
* Subscribe to aquisition type option changes
* 1. Add/Remove Validators based on auisition type value.
* 2. Recalculate the value and validation status.
* 
*/
subscribeToAcquisitionTypeOptionChange() {
  this.acquisitionType.valueChanges
    .subscribe((option: any) => {
      this.editOverviewForm.markAsPristine();
      this.selectedOptionAquisitionType = option;
      this.easementValueDetermined.clearValidators();
      this.easementCompliance.clearValidators();
      this.easements.clearValidators();
      this.accessExplained.clearValidators();
      this.residualProperty.clearValidators();

      switch (option.toString()) {
        case OstfAppAcquisitionTypeEnum.LESS_THAN_FEE_SIMPLE:
        case OstfAppAcquisitionTypeEnum.FEE_SIMPLE_AND_LESS_THAN_FEE_SIMPLE:
          this.easementCompliance.setValidators([Validators.required, Validators.maxLength(2000)]);
          this.easementValueDetermined.setValidators([Validators.required, Validators.maxLength(2000)]);
          this.easements.setValidators([Validators.required, Validators.maxLength(200)]);
          this.accessExplained.setValidators([Validators.required, Validators.maxLength(2000)]);
          this.residualProperty.setValidators([Validators.required, Validators.maxLength(2000)]);
          this.publicAccess.setValue('true');
          this.easementValue.setValue('true');
          break;
        case OstfAppAcquisitionTypeEnum.FEE_SIMPLE:
          this.easementCompliance.setValue('');
          this.easementValueDetermined.setValue('');
          this.easements.setValue('');
          this.accessExplained.setValue('');
          this.residualProperty.setValue('');
          this.publicAccess.setValue('false');
          this.easementValue.setValue('false');
          break;
        case OstfAppAcquisitionTypeEnum.NONE:
          this.acquisitionType.setValue('');
          this.acquisitionType.updateValueAndValidity(
            { onlySelf: true, emitEvent: false }
          );
          break;
        default:
          break;
      }

      this.easementCompliance.updateValueAndValidity();
      this.easementValueDetermined.updateValueAndValidity();
      this.easements.updateValueAndValidity();
      this.accessExplained.updateValueAndValidity();
      this.residualProperty.updateValueAndValidity();
      this.publicAccess.updateValueAndValidity();
      this.easementValue.updateValueAndValidity();
    });
}

/**
* Subscribe to prior application option changes
* 1. Add/Remove Validators based on prior application flag.
* 2. Recalculate the value and validation status.
* 
*/
subscribeToPriorApplicationOptionChange() {
  this.priorApplication.valueChanges
    .subscribe((option: any) => {
      this.selectedPriorApplicationType = option;
      this.priorApplicationYear.clearValidators();
      if (this.selectedPriorApplicationType == 'true') {
        this.priorApplicationYear.setValidators([Validators.required, Validators.maxLength(4)]);
      } else {
        this.priorApplicationYear.setValue('');
      }
      this.priorApplicationYear.updateValueAndValidity();
    });
}


/**
* Subscribe to  public access option changes
* 1. Add/Remove Validators based on public access flag.
* 2. Recalculate the value and validation status.
* 
*/
subscribeToPublicAccessOptionChange() {
  this.publicAccess.valueChanges
    .subscribe((option: any) => {
      this.selectedPublicAccessType = option;
      this.accessExplained.clearValidators();
      if (this.selectedPublicAccessType == "true") {
        this.accessExplained.setValidators([Validators.required, Validators.maxLength(2000)]);
      } else {
        this.accessExplained.setValue('');
      }
      this.accessExplained.updateValueAndValidity();
    });
}

/**
 * Subscribe to easement value changes
 * 1. Add/Remove Validators based on easement value flag.
 * 2. Recalculate the value and validation status.
 * 
 */
subscribeToEasementValueOptionChange() {
  this.easementValue.valueChanges
    .subscribe((option: any) => {
      this.selectedEasementValueType = option;
      this.easementValueDetermined.clearValidators();
      if (this.selectedEasementValueType == 'true') {
        this.easementValueDetermined.setValidators([Validators.required, Validators.maxLength(2000)]);
      } else {
        this.easementValueDetermined.setValue('');
      }
      this.easementValueDetermined.updateValueAndValidity();
    });
}

/**
* Subscribe to priority application option changes
* 1. Add/Remove Validators based on prior application flag.
* 2. Recalculate the value and validation status.
* 
*/
subscribeToPriorityApplicationOptionChange() {
  this.priorityApplication.valueChanges
    .subscribe((option: any) => {
      this.selectedPriorityApplicationType = option;
      this.priorityLevel.clearValidators();
      if (this.selectedPriorityApplicationType == 'true') {
        this.priorityLevel.setValidators([Validators.required]);
      } else {
        this.priorityLevel.setValue('');
      }
      this.priorityLevel.updateValueAndValidity();
    });
}

/**
* Submit the form performs following actions,
* 1. Check if form is valid to submit
* 2. Stop if form is invalid
* 3. Save overview
* 
*/
onSubmit() {
  if (!this.editOverviewForm.valid) {
    return;
  } else {
    this.ostfOverview.openSnackBar("Application saved Successfully","")
  }
}



/**
* Return error for a given validator
* 
*/
public errorHandling = (control: string, error: string) => {
  return this.editOverviewForm.controls[control].hasError(error);
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
