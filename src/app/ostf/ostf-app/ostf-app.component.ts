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
        link: './project/projview/1',
        index: 0
      }, {
        label: 'Role',
        link: './role/roleedit/1',
        index: 1
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
