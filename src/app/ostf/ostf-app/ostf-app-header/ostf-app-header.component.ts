import { Component, OnInit, ViewChild } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-ostf-app-header',
  templateUrl: './ostf-app-header.component.html',
  styleUrls: ['./ostf-app-header.component.scss']
})
export class OstfAppHeaderComponent implements OnInit {
  navLinks = [];
  avLinks: any[];
  activeLinkIndex = -1;
  tests = [];


  constructor() {

    this.tests = [

      {
        title: 'Application ID',
        subTitle: 5023,
        svg: '../../assets/svg/app-id.svg'
      },

    ]
  }

  ngOnInit() {
  }

}
