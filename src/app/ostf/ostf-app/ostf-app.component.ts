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
  activeLink = 'project/projectview/1';
  constructor(private router: Router, private ostfService: OstfService) {

  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
      this.activeLink = this.router.url;
    });
    this.getNavLinks();
  }
  getNavLinks() {
    this.ostfService.getNavLinks().subscribe((res: []) => {
      this.navLinks = res;
      this.activeLink = this.router.url;
    });
  }
}
