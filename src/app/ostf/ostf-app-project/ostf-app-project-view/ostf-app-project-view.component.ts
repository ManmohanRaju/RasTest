import { AgencyTypeEnum } from './../../../pres-trust-core/models/agency-type-enum';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FileHandle } from '../dragDrop.directive';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ostf-app-project-view',
  templateUrl: './ostf-app-project-view.component.html',
  styleUrls: ['./ostf-app-project-view.component.scss']
})
export class OstfAppProjectViewComponent implements OnInit {
// constants
CURRENT_DATE: Date = new Date();
USERID: string = '';


// subjects
private unsubscribe$ = new Subject();

// form(s)
viewProjectForm: FormGroup;


// selected option(s), selected record(s), selected value(s)
selectedOptionAgencyType: string = AgencyTypeEnum.MUNICIPALITY;
selectedOptionSharedFacilitites: string = 'true';



constructor(
  private fb: FormBuilder,

) { }

/**
* Getter methods to access formcontrols 
*    
*/
get projectTitle() { return this.viewProjectForm.get('projectTitle'); }
get agencyId() { return this.viewProjectForm.get('agencyId'); }
get agencyType() { return this.viewProjectForm.get('agencyType'); }
get siteAddress() { return this.viewProjectForm.get('siteAddress'); }
get maintainPropertyDesc() { return this.viewProjectForm.get('maintainPropertyDesc'); }
get currentLandsDesc() { return this.viewProjectForm.get('currentLandsDesc'); }
get conservancyNotExistedDesc() { return this.viewProjectForm.get('conservancyNotExistedDesc'); }
get sharedFacilities() { return this.viewProjectForm.get('sharedFacilities'); }
get landsManagedDesc() { return this.viewProjectForm.get('landsManagedDesc'); }
get sharedFacilitiesTownsDesc() { return this.viewProjectForm.get('sharedFacilitiesTownsDesc'); }

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
  this.viewProjectForm = this.fb.group({
    projectTitle: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(128)]],
    agencyId: ["", [Validators.required]],
    agencyType: [this.selectedOptionAgencyType.toLowerCase()],
    siteAddress: [''],
    sharedFacilities: [""],
    landsManagedDesc: ["", [Validators.required, Validators.maxLength(2000)]],
    sharedFacilitiesTownsDesc: ["", [Validators.required, Validators.maxLength(2000)]],
    maintainPropertyDesc: ["", [Validators.required, Validators.maxLength(2000)]],
    conservancyNotExistedDesc: ["", [Validators.required, Validators.maxLength(2000)]],
    currentLandsDesc: ["", [Validators.required, Validators.maxLength(2000)]]
  });
}

subscribeToControlValueChanges(){
  this.agencyType.setValue("municipality");
  this.sharedFacilities.setValue("true");
}







ngOnDestroy() {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
}
}
