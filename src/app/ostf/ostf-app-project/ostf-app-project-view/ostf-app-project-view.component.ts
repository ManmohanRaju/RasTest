import { Component, OnInit } from '@angular/core';
import { FileHandle } from '../dragDrop.directive';

@Component({
  selector: 'app-ostf-app-project-view',
  templateUrl: './ostf-app-project-view.component.html',
  styleUrls: ['./ostf-app-project-view.component.scss']
})
export class OstfAppProjectViewComponent implements OnInit {
  name = 'Angular 5';
  files: FileHandle[] = [];
  currentInput:any=[];
  removable = true;
  selectable=true;
  currentInput1:any=[];
  onFileSelected(event) {
    console.log(event.target.files);
    this.currentInput = event.target.files; 
    // this.Arr.push(this.currentInput);
  }
  onFileSelected1(event) {
    console.log(event.target.files);
    this.currentInput1 = event.target.files; 
    // this.Arr.push(this.currentInput);
  }
  remove(i){

  }
  ngOnInit(): void {
  }

}
