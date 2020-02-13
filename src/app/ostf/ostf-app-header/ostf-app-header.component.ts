import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostf-app-header',
  templateUrl: './ostf-app-header.component.html',
  styleUrls: ['./ostf-app-header.component.scss']
})
export class OstfAppHeaderComponent implements OnInit {
  navLinks=[];
  avLinks: any[];
  activeLinkIndex = -1;
  constructor() { 
    this.navLinks = [
      {
        label: 'Project',
        link: './project/projedit/1',
        index: 0
      }, {
        label: 'Role',
        link: './role',
        index: 1
      }, {
        label: 'Overview',
        link: './role/roleedit/1',
        index: 2
      },
      {
        label: 'Location',
        link: './role/roleedit/1',
        index: 3
      },
      {
        label: 'Site Characteristics',
        link: './role/roleedit/1',
        index: 4
      },
      {
        label: 'Financing',
        link: './role/roleedit/1',
        index: 5
      },
      {
        label: 'Planning & Management',
        link: './role/roleedit/1',
        index: 6
      },
      {
        label: 'Project Narrative',
        link: './role/roleedit/1',
        index:  7
      },
      {
        label: 'Signature',
        link: './role/roleedit/1',
        index: 8
      },
    ];
  }

  ngOnInit(): void {
  }

}
