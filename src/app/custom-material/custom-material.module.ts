import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';




const matModules = [
  CommonModule,
  MatSidenavModule, MatToolbarModule,MatMenuModule,
  MatButtonModule, MatBadgeModule, MatIconModule, MatProgressBarModule,
  MatListModule, MatDividerModule,
  MatTableModule,
  MatTabsModule,
  MatInputModule,MatFormFieldModule,MatGridListModule,
  MatCardModule,MatCheckboxModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule,MatSelectModule,
  MatChipsModule
]

@NgModule({
  declarations: [],
  imports: [matModules],
  exports: [matModules]
})
export class CustomMaterialModule { }
