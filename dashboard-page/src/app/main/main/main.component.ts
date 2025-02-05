import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserComponent } from "../user/user.component";
import { UserDialogComponent } from "../user-dialog/user-dialog.component";

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
  selector: 'app-main',
  imports: [UserComponent, UserDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  isDialogOpen = false;
  selectedUserId!: string;

  users : UserArray[] = [
    {
      id: 'u1',
      image: 'profile-picture.jpg',
      name: 'Boitumelo Mkhwanazi',
      price: 2500,
      countProducts: 120,
      packageCount: 105,
      status: 'Gold'
    },
    {
      id: 'u2',
      image: 'profile-picture.jpg',
      name: 'Boitumelo Mkhwanazi',
      price: 2500,
      countProducts: 120,
      packageCount: 105,
      status: 'Silver'
    },
    {
      id: 'u3',
      image: 'profile-picture.jpg',
      name: 'Boitumelo Mkhwanazi',
      price: 2500,
      countProducts: 120,
      packageCount: 105,
      status: 'Gold'
    }
  ]

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }
  

  showUserDialog(id: string) {
    this.selectedUserId = id;
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }
}
