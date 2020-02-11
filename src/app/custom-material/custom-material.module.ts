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

const matModules = [
  CommonModule,
  MatSidenavModule, MatToolbarModule,
  MatButtonModule, MatBadgeModule, MatIconModule, MatProgressSpinnerModule,
  MatListModule, MatDividerModule,
  MatTableModule,
]

@NgModule({
  declarations: [],
  imports: [matModules],
  exports: [matModules]
})
export class CustomMaterialModule { }
