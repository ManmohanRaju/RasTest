import { SessionStorageService } from './../services/session-storage.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  countUnreadMessages = 1;
  constructor(
    public router:Router,
    private sessionService:SessionStorageService
    ) {}

  ngOnInit() {
  }

  logOut(){
    this.sessionService.logoutSession();
    this.router.navigate(["/"]);
  }
}
