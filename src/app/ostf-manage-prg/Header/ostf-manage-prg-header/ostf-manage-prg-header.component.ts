import { Router,NavigationEnd,ActivatedRoute,Event,PRIMARY_OUTLET,Params } from '@angular/router';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { filter } from 'rxjs/operators';
import {Location} from '@angular/common';





// import { IBreadCrumb } from '../../../interfaces/breadcrumb.interface';
interface IBreadcrumb {
  label: string;
  params: Params;
  url: string;
}
@Component({
  selector: 'app-ostf-manage-prg-header',
  templateUrl: './ostf-manage-prg-header.component.html',
  styleUrls: ['./ostf-manage-prg-header.component.scss']
})

export class OstfManagePrgHeaderComponent implements OnInit {
@Input() page:string;
@Output() send=new EventEmitter();
value:any;
//\
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private _location: Location) {}

  ngOnInit(): void {
    console.log(this.page)
}
backClicked() {
  this._location.back();
}
doFilter(e){
  this.send.emit(e);
}
}
