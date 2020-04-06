
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';
import { SideNavItemDto } from './models/side-nav-item-dto';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  //#region " Members "

  private _sideNav: MatSidenav;
  private _sideNavItems: SideNavItemDto[] = [];
  public changesMainNavLinks: BehaviorSubject<SideNavItemDto[]> = new BehaviorSubject<SideNavItemDto[]>([]);

  //#endregion

  //#region " .ctor "

  constructor() {
    this.updateMainNavigationLinksTest();
  }

  //#endregion

  //#region " Procedures "
  
  public setSideNav(sideNav: MatSidenav) {
    this._sideNav = sideNav;
  }
  
  public open(): void {
    this._sideNav.open();
  }

  public close(): void {
    this._sideNav.close();
  }

  public toggle(): void {
    this._sideNav.toggle();
  }

  updateMainNavigationLinks(links: SideNavItemDto[]) {
    this._sideNavItems = links;
    this.changesMainNavLinks.next(this._sideNavItems.slice())
  }

  //#endregion

  //#region " Unit Test"

  updateMainNavigationLinksTest() {
    var sideNavItems: SideNavItemDto[] = [
      new SideNavItemDto(1, 0, 'Home','flaticon2-protection', 'dashboard', [], 1, []),
      new SideNavItemDto(2, 0, 'Applications','flaticon-squares-4', 'applications', [], 2, []),
      new SideNavItemDto(3, 0, 'Reports','flaticon2-document', '#', [], 3, []),
      new SideNavItemDto(3, 0, 'Reports2','flaticon2-layers-2', 'programManager', [], 3, []),
      new SideNavItemDto(4, 0, 'Admin','flaticon2-calendar-3', '#', [], 4, []),
    ];
    this.updateMainNavigationLinks(sideNavItems);
  }

  //#endregion

}



// import { Injectable } from '@angular/core';
// import { MatSidenav } from '@angular/material/sidenav';
// import { BehaviorSubject } from 'rxjs';
// import { SideNavItemDto } from './models/side-nav-item-dto';

// @Injectable({
//   providedIn: 'root'
// })
// export class SideNavService {

//   //#region " Members " 
//   private _sideNav: MatSidenav;
//   private _sideNavItems: SideNavItemDto[] = [];
//   public changesMainNavLinks: BehaviorSubject<SideNavItemDto[]> = new BehaviorSubject<SideNavItemDto[]>([]);

//   //#endregion

//   //#region " .ctor "

//   constructor() {
//     this.updateMainNavigationLinksTest();
//   }

//   //#endregion

//   //#region " Procedures "

//   public setSideNav(sideNav: MatSidenav) {
//     this._sideNav = sideNav;
//   }

//   public open(): void {
//     this._sideNav.open();
//   }

//   public close(): void {
//     this._sideNav.close();
//   }

//   public toggle(): void {
//     this._sideNav.toggle();
//   }

//   updateMainNavigationLinks(links: SideNavItemDto[]) {
//     this._sideNavItems = links;
//     this.changesMainNavLinks.next(this._sideNavItems.slice())
//   }

//   //#endregion

//   //#region " Unit Test"

//   updateMainNavigationLinksTest() {
//     var sideNavItems: SideNavItemDto[] = [
//       new SideNavItemDto(1, 0, 'Home', 'dashboard', 'add', [], 1,[]),
//       new SideNavItemDto(2, 0, 'Applications', 'applications', 'add', [], 2,[]),
//       new SideNavItemDto(3, 0, 'Reports', '#', 'add', [], 3,[]),
//       new SideNavItemDto(4, 0, 'Admin', '#', 'adddd', [], 4,[]),
//     ];

//     this.updateMainNavigationLinks(sideNavItems);
//   }

//   //#endregion

// }