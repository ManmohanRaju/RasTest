import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

export interface DocumentChecklist {
  name: string;
  showcommittee: boolean;
  hardcopy: boolean;
  approved: boolean;
  comments: string;
  show: boolean;
  checkshow: boolean;
  slideshow: boolean;
  icon: boolean;
}
const ELEMENT_DATA: DocumentChecklist[] = [
  {name: 'The Organizations by laws', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', show: false, checkshow: false, slideshow: true, icon: false},
  {name: 'Document Name1', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', show: true, checkshow: true, slideshow: false, icon: true},
  {name: 'Document Name2', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', show: true, checkshow: true, slideshow: false, icon: true},
  {name: 'The Organizations certificate of incorporation', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', show: false, checkshow: false, slideshow: true, icon: false},
  {name: 'Document Name1', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', show: true, checkshow: true, slideshow: false, icon: true},
  {name: 'Document Name2', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', show: true, checkshow: true, slideshow: false, icon: true},
  {name: 'Document Name3', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', show: true, checkshow: true, slideshow: false, icon: true},
  {name: 'Document Name4', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', show: true, checkshow: true, slideshow: false, icon: true},
];

@Component({
  selector: 'app-ostf-app-doc-checklist-view',
  templateUrl: './ostf-app-doc-checklist-view.component.html',
  styleUrls: ['./ostf-app-doc-checklist-view.component.scss']
})
export class OstfAppDocChecklistViewComponent implements OnInit {

  panelOpenState = false;
  public displayedColumns: string[] = [ 'name', 'icon', 'showcommittee', 'hardcopy', 'approved', 'comments'];
  public dataSource = ELEMENT_DATA;
  selection = new SelectionModel<DocumentChecklist>(true, []);
  constructor() { }

  ngOnInit(): void {
  }
  
  isSelect(element: DocumentChecklist)
  {
    return element.showcommittee;
  }
}
