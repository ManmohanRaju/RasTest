import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostf-app-pending-view',
  templateUrl: './ostf-app-pending-view.component.html',
  styleUrls: ['./ostf-app-pending-view.component.scss']
})
export class OstfAppPendingViewComponent implements OnInit {
  currentInput:any=[]
  removable = true;
  selectable=true;
  fruits=[];
  currentInput1;
  constructor() { }

  ngOnInit(): void {
  }
  onFileSelected(event) {
    console.log(event.target.files);
    this.currentInput = event.target.files; 
  }
  remove(i){

  }
}
