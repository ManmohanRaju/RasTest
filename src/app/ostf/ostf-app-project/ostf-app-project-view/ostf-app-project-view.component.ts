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

  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }
  ngOnInit(): void {
  }

}
