import { Component, OnInit, ViewChild } from '@angular/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-ostf-app-header',
  templateUrl: './ostf-app-header.component.html',
  styleUrls: ['./ostf-app-header.component.scss']
})
export class OstfAppHeaderComponent implements OnInit {
  navLinks=[];
  avLinks: any[];
  activeLinkIndex = -1;
  tests=[];
  // color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
  // @ViewChild()
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
      // {
      //   label: 'Signature',
      //   link: './role/roleedit/1',
      //   index: 8
      // },
    ];
    this.tests= [
     
      {
        title:'Application ID',
        subTitle:5023,
        icon:'assignment_turned_in'
              },
              {
                title:'24 Comments',
                subTitle:'View',
        icon:'comments'

                      },
                      {
                        title:'Feedback(03)',
                        subTitle:'Create Feedback',
        icon:'feedback'

                              },
                              {
                                title:'Initial Submission',
                        subTitle:'Change Status',
        icon:'done'


                                      }
    ]
  }

  ngOnInit(): void {
  }
  changeLang(){}
}
