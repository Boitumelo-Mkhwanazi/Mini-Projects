import { Component, input } from '@angular/core';

interface LinkType {
  id: string,
  text: string
}

@Component({
  selector: 'app-link-item',
  imports: [],
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.css'
})
export class LinkItemComponent {
  linkItem = input.required<LinkType>();
}
