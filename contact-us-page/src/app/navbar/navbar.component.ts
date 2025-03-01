import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LinkItemComponent } from "./link-item/link-item.component";

interface LinkType {
  id: string,
  text: string
}

@Component({
  selector: 'app-navbar',
  imports: [LinkItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  linkItems: LinkType[] = [
    {
      id: '1',
      text: 'Pricing'
    }, 
    {
      id: '2',
      text: 'Features'
    },
    {
      id: '3',
      text: 'Solutions'
    },
    {
      id: '4',
      text: 'Resources'
    },
    {
      id: '5',
      text: 'About us'
    }
  ]
}
