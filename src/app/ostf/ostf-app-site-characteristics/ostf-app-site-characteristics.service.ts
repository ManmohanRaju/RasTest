import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

export interface ListOfStructuresModel {
  structureId: number;
  structures: number;
  sqFoot: number;
  proposedUse: number;
  tobedemolished: boolean;
  costOfDemolition: number;
  demolitioncomplete: boolean;
  reimbursementCost: number;
}

@Injectable({
  providedIn: 'root'
})
export class OstfAppSiteCharacteristicsService {

  public listOfStructures: ListOfStructuresModel[] = [];

  constructor() { }

  public form: FormGroup = new FormGroup({
    structureId: new FormControl(null),
    structures: new FormControl('', Validators.required),
    sqFoot: new FormControl('', Validators.required),
    proposedUse: new FormControl('', Validators.required),
    tobedemolished: new FormControl(''),
    costOfDemolition: new FormControl(''),
    demolitioncomplete: new FormControl(0),
    reimbursementCost: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      structureId: 0,
      structures: '',
      sqFoot: '',
      proposedUse: '',
      tobedemolished: false,
      costOfDemolition: '',
      demolitioncomplete: false,
      reimbursementCost: ''
    });
  }


  getEmployees() {
    return this.listOfStructures;
  }

  insertEmployee(structure) {
    this.listOfStructures.push({
      structureId: this.listOfStructures.length + 1,
      structures: structure.structures,
      sqFoot: structure.sqFoot,
      proposedUse: structure.proposedUse,
      tobedemolished: structure.tobedemolished,
      costOfDemolition: structure.costOfDemolition,
      demolitioncomplete: structure.demolitioncomplete,
      reimbursementCost: structure.reimbursementCost
    });
  }

  updateEmployee(structure: ListOfStructuresModel) {
    let index = this.listOfStructures.findIndex(x => x.structureId === structure.structureId);
    let element = this.listOfStructures[index];
    element.structureId = structure.structureId;
    element.structures = structure.structures;
    element.sqFoot = structure.sqFoot;
    element.proposedUse = structure.proposedUse;
    element.tobedemolished = structure.tobedemolished;
    element.costOfDemolition = structure.costOfDemolition;
    element.demolitioncomplete = structure.demolitioncomplete;
    element.reimbursementCost = structure.reimbursementCost;
  }

  deleteEmployee(index: number) {
    this.listOfStructures.slice(index, 1);
  }

  populateForm(structure) {
    this.form.setValue({
      structureId: structure.structureId,
      structures: structure.structures,
      sqFoot: structure.sqFoot,
      proposedUse: structure.proposedUse,
      tobedemolished: structure.tobedemolished,
      costOfDemolition: structure.costOfDemolition,
      demolitioncomplete: structure.demolitioncomplete,
      reimbursementCost: structure.reimbursementCost
    });
  }
}
