import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { LinkItemComponent } from "../link-item/link-item.component";

import { type linkType } from '../sidebar.model';

@Component({
  selector: 'app-aside',
  imports: [LinkItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  isMenuOpen = input.required<boolean>();
  

  links : linkType[] = [
    {
      id: '1',
      name: 'Overview',
      image: 'overview.png',
    },
    {
      id: '2',
      name: 'Favorite',
      image: 'star.png',
    },
    {
      id: '3',
      name: 'Users',
      image: 'users.png',
    },
    {
      id: '4',
      name: 'Gallery',
      image: 'picture-folder.png',
    },
    {
      id: '5',
      name: 'Timeline',
      image: 'timeline.png',
    },
    {
      id: '6',
      name: 'Setting',
      image: 'settings.png',
    },
    {
      id: '7',
      name: 'Log Out',
      image: 'logout.png',
    }
  ];
}
