import { SessionStorageService } from './../../../pres-trust-core/services/session-storage.service';
import { ActivatedRoute } from '@angular/router';
import { OstfAppProjectService } from './../ostf-app-project.service';
import { FileHandle } from './../dragDrop.directive';
import { AgencyTypeEnum } from './../../../pres-trust-core/models/agency-type-enum';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit ,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-ostf-app-project-edit',
  templateUrl: './ostf-app-project-edit.component.html',
  styleUrls: ['./ostf-app-project-edit.component.scss']
})
export class OstfAppProjectEditComponent implements OnInit {

  // form(s)
  editProjectForm: FormGroup;
  selectedAgency: any;

  selectedOptionAgencyType: string = AgencyTypeEnum.MUNICIPALITY;
  selectedOptionSharedFacilitites: string = 'true';
  files: FileHandle[] = [];
  currentInput: any = [];
  removable = true;
  selectable = true;
  currentInput1: any = [];
  applications: any = [];
  projectDetails:any = {};
  id;

  agencies = [
    { id: 1, agencyName: "TestTown" },
    { id: 2, agencyName: "TestTown1" },
  ]

  constructor(
    private fb: FormBuilder,
    private ostfProject: OstfAppProjectService,
    private route: ActivatedRoute,
    private sessionService: SessionStorageService
  ) {

  }

  /**
 * Getter methods to access formcontrols 
 *    
 */
  get projectTitle() { return this.editProjectForm.get('projectTitle'); }
  get agencyId() { return this.editProjectForm.get('agencyId'); }
  get agencyType() { return this.editProjectForm.get('agencyType'); }
  get siteAddress() { return this.editProjectForm.get('siteAddress'); }
  get maintainPropertyDesc() { return this.editProjectForm.get('maintainPropertyDesc'); }
  get currentLandsDesc() { return this.editProjectForm.get('currentLandsDesc'); }
  get conservancyNotExistedDesc() { return this.editProjectForm.get('conservancyNotExistedDesc'); }
  get sharedFacilities() { return this.editProjectForm.get('sharedFacilities'); }
  get landsManagedDesc() { return this.editProjectForm.get('landsManagedDesc'); }
  get sharedFacilitiesTownsDesc() { return this.editProjectForm.get('sharedFacilitiesTownsDesc'); }

  ngOnInit() {
    this.buildProjectForm();
    this.subscribeToControlValueChanges();
    this.getApplications();

  }

  
  /**
 * Build reactive form
 *
 */
  buildProjectForm() {
    this.editProjectForm = this.fb.group({
      projectTitle: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(128)]],
      agencyId: ["", [Validators.required]],
      agencyType: [this.selectedOptionAgencyType.toLocaleLowerCase()],
      siteAddress: [''],
      sharedFacilities: [""],
      landsManagedDesc: ["", [Validators.required, Validators.maxLength(2000)]],
      sharedFacilitiesTownsDesc: ["", [Validators.required, Validators.maxLength(2000)]],
      maintainPropertyDesc: ["", [Validators.required, Validators.maxLength(2000)]],
      conservancyNotExistedDesc: ["", [Validators.required, Validators.maxLength(2000)]],
      currentLandsDesc: ["", [Validators.required, Validators.maxLength(2000)]]
    });
  }

  getApplications() {
    this.applications = this.sessionService.getApplications();
    this.id = this.sessionService.getUserId();
    for (var i = 0; i <= this.applications.length; i++) {
      if (this.applications[i]?.projectId == this.id) {
        this.projectDetails = this.applications[i];
        this.setEditProjectFormControlValues();
      }
    }
  }

  ngAfterViewInit(){
   
  }

  setEditProjectFormControlValues(){
    this.editProjectForm.get('projectTitle').setValue(this.projectDetails.projectTitle);
    this.editProjectForm.get('agencyId').setValue(this.projectDetails.agencyName);
    this.editProjectForm.get('siteAddress').setValue(this.projectDetails.address);
    this.editProjectForm.get('agencyType').setValue(this.projectDetails.agencyType);
    this.selectedOptionAgencyType = this.projectDetails.agencyType;
  }


  subscribeToControlValueChanges() {
    this.subscribeToAgencyTypeOptionChange();
    this.subscribeToSharedFacilityOptionChange();
  }

  /**
* Subscribe to agency type option changes
* 1. Add/Remove Validators based on agency type selected.
* 2. Recalculate the value and validation status.
* 
*/
  subscribeToAgencyTypeOptionChange() {
    this.agencyType.valueChanges
      .subscribe((option: any) => {
        this.selectedOptionAgencyType = option;
        this.sharedFacilitiesTownsDesc.clearValidators();
        this.landsManagedDesc.clearValidators();
        this.maintainPropertyDesc.clearValidators();
        this.currentLandsDesc.clearValidators();
        this.conservancyNotExistedDesc.clearValidators();
        switch (option.toString().toLowerCase()) {
          case AgencyTypeEnum.MUNICIPALITY:
            this.maintainPropertyDesc.setValue('');
            this.currentLandsDesc.setValue('');
            this.conservancyNotExistedDesc.setValue('');
            this.sharedFacilities.setValue('true');
            this.sharedFacilitiesTownsDesc.setValidators([Validators.required, Validators.maxLength(2000)]);
            this.landsManagedDesc.setValidators([Validators.required, Validators.maxLength(2000)]);
            break;
          case AgencyTypeEnum.NONPROFIT:
            this.sharedFacilitiesTownsDesc.setValue('');
            this.landsManagedDesc.setValue('');
            this.sharedFacilities.setValue('false');
            this.maintainPropertyDesc.setValidators([Validators.required, Validators.maxLength(2000)]);
            this.currentLandsDesc.setValidators([Validators.required, Validators.maxLength(2000)]);
            this.conservancyNotExistedDesc.setValidators([Validators.required, Validators.maxLength(2000)]);
            break;
          default:
            break;
        }
        this.sharedFacilitiesTownsDesc.updateValueAndValidity();
        this.landsManagedDesc.updateValueAndValidity();
        this.maintainPropertyDesc.updateValueAndValidity();
        this.currentLandsDesc.updateValueAndValidity();
        this.conservancyNotExistedDesc.updateValueAndValidity();
        this.sharedFacilities.updateValueAndValidity();
      });
  }

  /**
  * Subscribe to shared facility option changes
  * 1. Add/Remove Validators based on shared facility flag.
  * 2. Recalculate the value and validation status.
  * 
  */
  subscribeToSharedFacilityOptionChange() {
    this.sharedFacilities.valueChanges
      .subscribe((option: any) => {
        this.selectedOptionSharedFacilitites = option;
        this.sharedFacilitiesTownsDesc.clearValidators();
        if (this.selectedOptionSharedFacilitites == 'true') {
          this.sharedFacilitiesTownsDesc.setValidators([Validators.required, Validators.maxLength(2000)]);
        } else {
          this.sharedFacilitiesTownsDesc.setValue('');
        }
        this.sharedFacilitiesTownsDesc.updateValueAndValidity();
      });
  }

  onSubmit() {
    if (!this.editProjectForm.valid) {
      return;
    } else {
      this.ostfProject.openSnackBar("Application saved Successfully", "")
    }
  }

  /**
* Return error for a given validator
* 
*/
  public errorHandling = (control: string, error: string) => {
    return this.editProjectForm.controls[control].hasError(error);
  }

  onFileSelected(event) {
    console.log(event.target.files);
    this.currentInput = event.target.files;
    // this.Arr.push(this.currentInput);
  }
  onFileSelected1(event) {
    console.log(event.target.files);
    this.currentInput1 = event.target.files;
    // this.Arr.push(this.currentInput);
  }

 

}
