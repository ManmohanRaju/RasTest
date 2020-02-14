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
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Project',
        link: 'project/projectview/1',
        index: 0
      }, {
        label: 'Role',
        link: 'role',
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
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
