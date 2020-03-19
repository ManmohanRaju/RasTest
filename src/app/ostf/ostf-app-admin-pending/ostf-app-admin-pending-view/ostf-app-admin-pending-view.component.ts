import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostf-app-admin-pending-view',
  templateUrl: './ostf-app-admin-pending-view.component.html',
  styleUrls: ['./ostf-app-admin-pending-view.component.scss']
})
export class OstfAppAdminPendingViewComponent implements OnInit {
  currentInput=[];
  removable = true;
  selectable=true;
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
