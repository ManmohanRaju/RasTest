import { BehaviorSubject } from 'rxjs';
import { Injectable,OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OstfService implements OnInit {
  navLinks=[];
  linksArr=new BehaviorSubject([]);

  constructor() {
    this.linksArr=new BehaviorSubject(this.navLinks);
  }
  ngOnInit(){

    alert('hi');
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
        link: './overview/view/1',
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
      this.linksArr.next(this.navLinks);
  }
   getData(){
     return this.linksArr.asObservable();
   }
}
