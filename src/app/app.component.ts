//#region " Imports " 

import { Component, ViewChild, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SideNavService } from './pres-trust-core/side-nav.service';

//#endregion


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  //#region  " Members "

  @ViewChild('sideNav', { static: false }) sideNav: MatSidenav;

  //#endregion

  //#region " .ctor "

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private srvcSideNav: SideNavService, private cdr: ChangeDetectorRef) {
  }

  //#endregion

  //#region " Component LifeCycle Hooks "

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.srvcSideNav.setSideNav(this.sideNav);
        let activeRoot = this.activatedRoute.root;
        switch (activeRoot.snapshot.firstChild.url.toString()) {
          case 'login':
            this.srvcSideNav.close();
            break;
          default:
            this.sideNav.open();
        }
      });
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
}

  ngOnDestroy() {
  }

  //#endregion

}
