import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


const matModules = [
  CommonModule,
  MatSidenavModule, MatToolbarModule,
  MatButtonModule, MatBadgeModule, MatIconModule, MatProgressSpinnerModule,
  MatListModule, MatDividerModule,
  MatTableModule,
  MatTabsModule,
  MatInputModule,MatFormFieldModule
]

@NgModule({
  declarations: [],
  imports: [matModules],
  exports: [matModules]
})
export class CustomMaterialModule { }
