import { Component, input } from '@angular/core';

import { type linkType } from '../sidebar.model';

@Component({
  selector: 'app-link-item',
  imports: [],
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.css'
})
export class LinkItemComponent {
  item = input.required<linkType>();
}
