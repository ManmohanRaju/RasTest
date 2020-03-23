import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostf-app-appr-survey-view',
  templateUrl: './ostf-app-appr-survey-view.component.html',
  styleUrls: ['./ostf-app-appr-survey-view.component.scss']
})
export class OstfAppApprSurveyViewComponent implements OnInit {
  currentInput:any=[];
  removable = true;
  selectable=true;
  myArr=[];
  constructor() { }

  ngOnInit(): void {}
  onFileSelected(event) {
    this.currentInput = event.target.files;
   this.myArr.push(event.target.files);
   console.log(this.myArr);
  }
  remove(i){
this.myArr.splice(0,1)
  }
}
