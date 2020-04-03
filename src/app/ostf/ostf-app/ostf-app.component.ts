import { OstfService } from './../ostf.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ostf-app',
  templateUrl: './ostf-app.component.html',
  styleUrls: ['./ostf-app.component.scss']
})
export class OstfAppComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;
  activeLink='project/projectview/1';
  constructor(private router: Router,private ostfService:OstfService) {
    this.navLinks = [
      {
        label: 'Project',
        link: 'project/projectview/1',
        index: 0
      }, {
        label: 'Role',
        link: 'role/roleview/1',
        index: 1
      }, {
        label: 'Overview',
        link: './overview/view/1',
        index: 2
      },
      {
        label: 'Location',
        link: './role/roleedit/1',
        index: 3
      },
      {
        label: 'Site Characteristics',
        link: 'sitecharacteristics/view/1',
        index: 4
      },
      {
        label: 'Financing',
        link: './role/roleedit/1',
        index: 5
      },
      {
        label: 'Planning & Management',
        link: 'planning/view/1',
        index: 6
      },
      {
        label: 'Project Narrative',
        link: 'projectNarrative/view/1',
        index:  7
      },
      {
        label: 'Signature',
        link: 'signature/view/1',
        index: 8
      },
      {
        label: 'Other Documents',
        link: 'otherDocs/view/1',
        index: 9
      },
      {
        label: 'Staff Info',
        link: 'staffInfo/view/1',
        index: 10
      },
      {
        label: 'Apprisal Survey',
        link: 'survey/view/1',
        index: 10
      },
      {
        label: 'Admin Pending',
        link: 'pending/view/1',
        index: 10
      },
      {
        label: 'Admin Closing',
        link: 'closing/view/1',
        index: 10
      },
      {
        label: 'Document CheckList',
        link: 'checklist/view/1',
        index: 9
      },
      {
        label: 'Muncipal Finance',
        link: 'finance/view/1',
        index: 11
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
this.activeLink=this.router.url;
});
    this.getNavLinks();
  }
getNavLinks(){
  this.ostfService.getData().subscribe(res=> {
this.activeLink=this.router.url;
  });
}
}
