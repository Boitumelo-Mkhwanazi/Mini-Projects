import { Component, input, output } from '@angular/core';

interface UserArray {
  id: string,
  image: string,
  name: string,
  price: number,
  countProducts: number,
  packageCount: number,
  status: string
}

@Component({
  selector: 'app-user-dialog',
  imports: [],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.css'
})
export class UserDialogComponent {
  user = input.required<UserArray>();
  voidOutput = output<void>();

  closeDialog() {
    this.voidOutput.emit();
  }

}
