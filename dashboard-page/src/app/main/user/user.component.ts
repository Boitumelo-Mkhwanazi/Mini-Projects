import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { UserDialogComponent } from "../user-dialog/user-dialog.component";

interface UserArray {
  image: string,
  name: string,
  price: number,
  countProducts: number,
  packageCount: number,
  status: string
}

@Component({
  selector: 'app-user',
  imports: [UserDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<UserArray>();
}
