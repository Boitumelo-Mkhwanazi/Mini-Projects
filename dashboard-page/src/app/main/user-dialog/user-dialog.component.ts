import { Component, output } from '@angular/core';

@Component({
  selector: 'app-user-dialog',
  imports: [],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.css'
})
export class UserDialogComponent {
  voidOutput = output<void>();

  closeDialog() {
    this.voidOutput.emit();
  }

}
