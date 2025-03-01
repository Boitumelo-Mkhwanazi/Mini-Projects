import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { LinkItemComponent } from "./link-item/link-item.component";
import { CategoryItemComponent } from './category-item/category-item.component';

interface LinkType {
  id: string,
  text: string
}

@Component({
  selector: 'app-navbar',
  imports: [LinkItemComponent, CategoryItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  selectedCategoryItem!: string;
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

  categories: LinkType[] = [
    {
      id: '1',
      text: 'View All'
    }, 
    {
      id: '2',
      text: 'UI/UX Designers'
    },
    {
      id: '3',
      text: 'Software Developers'
    },
    {
      id: '4',
      text: 'Software Testers'
    },
    {
      id: '5',
      text: 'Marketing'
    }
  ]

  onSelectedCategory(isSelected: string) {
    this.selectedCategoryItem = isSelected;
  }
}
