import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { linkItem  } from './navbar.model';
import { LinkItemComponent } from "./link-item/link-item.component";

@Component({
  selector: 'app-navbar',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [LinkItemComponent]
})
export class NavbarComponent {
  isMenuOpen : boolean = false;
  selectedLinkItem !: String;
  linkItems : linkItem[] = [
    {
      id: '1',
      name: 'Features',
    }, 
    {
      id: '2',
      name: 'Examples',
    },
    {
      id: '3',
      name: 'Pricing'
    },
    {
      id: '4',
      name: 'Blog'
    }
  ]

  getActive(id: String) {
    this.selectedLinkItem = id;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
