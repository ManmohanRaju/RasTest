import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostf-app-preserved-view',
  templateUrl: './ostf-app-preserved-view.component.html',
  styleUrls: ['./ostf-app-preserved-view.component.scss']
})
export class OstfAppPreservedViewComponent implements OnInit {
  currentInput:any=[]
  removable = true;
  selectable=true;
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
