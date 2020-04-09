import { Component, OnInit } from '@angular/core';
import sampleData from './../documentChecklist_JSON.json';

export interface DocumentChecklist {
  docId: number;
  name: string;
  showcommittee: boolean;
  hardcopy: boolean;
  approved: boolean;
  comments: string;
  editshow: boolean;
  checkshow: boolean;
  slideshow: boolean;
  icon: boolean;
}
const ELEMENT_DATA: DocumentChecklist[] = [
  { docId: 0, name: 'The Organizations by laws', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', editshow: false, checkshow: false, slideshow: true, icon: false },
  { docId: 1, name: 'Document Name1', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', editshow: true, checkshow: true, slideshow: false, icon: true },
  { docId: 2, name: 'Document Name2', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', editshow: true, checkshow: true, slideshow: false, icon: true },
  { docId: 0, name: 'The Organizations certificate of incorporation', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', editshow: false, checkshow: false, slideshow: true, icon: false },
  { docId: 3, name: 'Document Name1', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', editshow: true, checkshow: true, slideshow: false, icon: true },
  { docId: 4, name: 'Document Name2', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', editshow: true, checkshow: true, slideshow: false, icon: true },
  { docId: 5, name: 'Document Name3', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', editshow: true, checkshow: true, slideshow: false, icon: true },
  { docId: 6, name: 'Document Name4', showcommittee: true, hardcopy: true, approved: true, comments: 'comments', editshow: true, checkshow: true, slideshow: false, icon: true },
];

@Component({
  selector: 'app-ostf-app-admin-doc-checklist-view',
  templateUrl: './ostf-app-admin-doc-checklist-view.component.html',
  styleUrls: ['./ostf-app-admin-doc-checklist-view.component.scss']
})
export class OstfAppAdminDocChecklistViewComponent implements OnInit {

  panelOpenState = false;
  public displayedColumns: string[] = ['name', 'icon', 'showcommittee', 'hardcopy', 'approved', 'comments'];
  public dataSource1 = ELEMENT_DATA;

  public dataSourceProject: DocumentChecklist[] = [];
  public dataSourceOverview: DocumentChecklist[] = [];
  public dataSourceLocation: DocumentChecklist[] = [];
  public dataSourceSite: DocumentChecklist[] = [];
  public dataSourceFinance: DocumentChecklist[] = [];
  public dataSourcePlanning: DocumentChecklist[] = [];

  public sections: any[];
  public docChecklist: DocumentChecklist;

  constructor() { }

  ngOnInit(): void {
    this.sections = sampleData.sections;

    this.sections.forEach(data => {

      // project section
      if (data.sectionName === 'project') {
        data.section.forEach(sec => {

          this.docChecklist = this.makeEmptyObject();
          this.firstPart(sec, this.dataSourceProject);
          this.secondPart(sec.documentList, this.dataSourceProject);
        });
      }

      //overview section
      if (data.sectionName === 'overview') {
        data.section.forEach(sec => {

          this.docChecklist = this.makeEmptyObject();
          this.firstPart(sec, this.dataSourceOverview);
          this.secondPart(sec.documentList, this.dataSourceOverview);
        });
      }

      //location section
      if (data.sectionName === 'location') {
        data.section.forEach(sec => {

          this.docChecklist = this.makeEmptyObject();
          this.firstPart(sec, this.dataSourceLocation);
          this.secondPart(sec.documentList, this.dataSourceLocation);
        });
      }

      //Site Characteristics section
      if (data.sectionName === 'site characteristics') {
        data.section.forEach(sec => {

          this.docChecklist = this.makeEmptyObject();
          this.firstPart(sec, this.dataSourceSite);
          this.secondPart(sec.documentList, this.dataSourceSite);
        });
      }

      //Finance section
      if (data.sectionName === 'finance') {
        data.section.forEach(sec => {

          this.docChecklist = this.makeEmptyObject();
          this.firstPart(sec, this.dataSourceFinance);
          this.secondPart(sec.documentList, this.dataSourceFinance);
        });
      }

      //Planning Management section
      if (data.sectionName === 'planning management') {
        data.section.forEach(sec => {

          this.docChecklist = this.makeEmptyObject();
          this.firstPart(sec, this.dataSourcePlanning);
          this.secondPart(sec.documentList, this.dataSourcePlanning);
        });
      }

    });

    console.log(this.dataSourceProject);
    console.log(this.dataSourceOverview);
    console.log(this.dataSourceLocation);
    console.log(this.dataSourceSite);
    console.log(this.dataSourceFinance);
    console.log(this.dataSourcePlanning);

  }

  makeEmptyObject() {
    return {
      docId: 0,
      name: '',
      showcommittee: false,
      hardcopy: false,
      approved: false,
      comments: '',
      editshow: false,
      checkshow: false,
      slideshow: false,
      icon: false
    };
  }

  firstPart(sec: any, dataSource: DocumentChecklist[]) {
    if (dataSource.filter(x => x.name == sec.documentChecklistName).length === 0) {
      this.docChecklist.name = sec.documentChecklistName;
      this.docChecklist.showcommittee = false;
      this.docChecklist.hardcopy = true;
      this.docChecklist.approved = true;
      this.docChecklist.editshow = false;
      this.docChecklist.checkshow = false;
      this.docChecklist.slideshow = true;
      this.docChecklist.icon = false;
      dataSource.push(this.docChecklist);
    }
  }

  secondPart(documentList: any[], dataSource: DocumentChecklist[]) {
    documentList.forEach(doc => {
      this.docChecklist = this.makeEmptyObject();
      this.docChecklist.docId = doc.docId;
      this.docChecklist.name = doc.name;
      this.docChecklist.showcommittee = doc.showcommittee;
      this.docChecklist.hardcopy = doc.hardcopy;
      this.docChecklist.approved = doc.approved;
      this.docChecklist.comments = doc.comments;
      this.docChecklist.editshow = true;
      this.docChecklist.checkshow = true;
      this.docChecklist.slideshow = false;
      this.docChecklist.icon = true;
      dataSource.push(this.docChecklist);
    });
  }

  isSelect(element: DocumentChecklist) {
    return element.showcommittee;
  }

  
  // save document name in popup
  saveDocument(){

  }
}
