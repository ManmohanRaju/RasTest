//#region " Imports " 

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from '../side-nav.service';
import { SideNavItemDto } from '../models/side-nav-item-dto';

//#endregion

@Component({
  selector: 'app-side-nav-items',
  templateUrl: './side-nav-items.component.html',
  styleUrls: ['./side-nav-items.component.scss']
})
export class SideNavItemsComponent implements OnInit, OnDestroy {

  //#region " Members "
  
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav; 
  private subscriptionSideNavigationLinks: Subscription;
  public navigationLinks: SideNavItemDto[] = [];
  public toggleSideNav: boolean = true;

  //#endregion

  //#region " .ctor "

  constructor(private srvcMainNavigation: SideNavService) { }

  //#endregion

  //#region " Component LifeCycle Hooks "

  ngOnInit() {
    this.srvcMainNavigation.setSideNav(this.sidenav);
    this.initialize();
  }

  ngOnDestroy() {
    this.subscriptionSideNavigationLinks.unsubscribe();
  }

  //#endregion

  //#region  " Procedures "

  initialize() {
    this.subscribeToMainNavigationLinkChanges();
  }

  subscribeToMainNavigationLinkChanges() {
    this.subscriptionSideNavigationLinks = this.srvcMainNavigation.changesMainNavLinks.subscribe(
      (response) => {
        this.navigationLinks = response;
      }
    )
  }

  buildRouterLinks(link) {
    let url = "";
    url = link.routerLink.toString();
    return url;
}

  toggleSideNavigation() {
    this.toggleSideNav = !this.toggleSideNav;
    this.sidenav.toggle();
  }

  //#endregion

}
