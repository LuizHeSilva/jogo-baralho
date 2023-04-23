import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {

  @Input() jogador: any;

  constructor(public dialogRef: MatDialogRef<DialogComponent>){}

}
