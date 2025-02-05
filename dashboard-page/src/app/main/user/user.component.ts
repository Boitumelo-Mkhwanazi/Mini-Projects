import { Component, CUSTOM_ELEMENTS_SCHEMA, input, output } from '@angular/core';

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
  selector: 'app-user',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<UserArray>();
  userId = output<string>();

  showUserDialog() {
    this.userId.emit(this.user().id);
  }
}
