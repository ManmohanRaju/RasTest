import { OstfService } from './../../ostf.service';
import { OstfAppPriorityLevelEnum } from './../../models/ostf-priority-level-enum';
import { OstfAppAcquisitionTypeEnum } from './../../models/ostf-auisition-type-enum';
import { OstfAppRecreationTypeEnum } from './../../models/ostf-recreation-type-enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostf-app-overview-view',
  templateUrl: './ostf-app-overview-view.component.html',
  styleUrls: ['./ostf-app-overview-view.component.scss']
})
export class OstfAppOverviewViewComponent implements OnInit {

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
  private ostfService: OstfService,
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

ngOnInit(): void {
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
    priorityLevel: [""],
    priorApplication: [""],
    priorApplicationYear: ["", [Validators.required]],
    priorApplicationName: [""],
    recreationalFacilities: ["", [Validators.required, Validators.maxLength(2000)]],
    activeFacilities: ["", [Validators.required, Validators.maxLength(2000)]],
    acquisitionType: ["", [Validators.required]],
    easementValue: [""],
    easementValueDetermined: ["", [Validators.required, Validators.maxLength(2000)]],
    easementCompliance: ["", [Validators.required, Validators.maxLength(2000)]],
    easements: ["", [Validators.required, Validators.maxLength(2000)]],
    publicAccess: [""],
    accessExplained: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(128)]],
    residualProperty: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(128)]],
  })
}



/**
* Subscribing to reactive form control's value changes
*  1. subscribe to agencyType changes
*  2. subscribe to sharedFacilities flag changes
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
      this.selectedOptionAquisitionType = option;
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
