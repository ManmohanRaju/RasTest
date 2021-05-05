import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OstfAppSignatureService {

  constructor(
    private snackBar:MatSnackBar
  ) { }

  openSnackBar(messsage, action) {
    return this.snackBar.open(messsage, action, {
      duration: 3000,
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'end',
      panelClass: ['success-snackbar']
    });
  }
}
