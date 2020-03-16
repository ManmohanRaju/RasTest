import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostf-app-plan-mgt-view',
  templateUrl: './ostf-app-plan-mgt-view.component.html',
  styleUrls: ['./ostf-app-plan-mgt-view.component.scss']
})
export class OstfAppPlanMgtViewComponent implements OnInit {
  currentInput:any=[]
  removable = true;
  selectable=true;
  fruits=[];
  currentInput1;
  currentInput2=[];
  currentInput3=[];
  currentInput4=[];
  Arr=[];
  constructor() { }

  ngOnInit(): void {
     }
  onFileSelected(event) {
    console.log(event.target.files);
    this.currentInput = event.target.files; 
    this.Arr.push(this.currentInput);
  }
  onFileSelected1(event){
    console.log(event.target.files);
    this.currentInput1 = event.target.files; 
  }
  onFileSelected2(event){
    console.log(event.target.files);
    this.currentInput2 = event.target.files; 
  }
  onFileSelected3(event){
    console.log(event.target.files);
    this.currentInput3 = event.target.files; 
  }
  onFileSelected4(event){
    console.log(event.target.files);
    this.currentInput4 = event.target.files; 
  }
  remove(index) {
    console.log(this.currentInput);
    this.currentInput.splice(index, 1);
   console.log(this.currentInput);
  }
}
