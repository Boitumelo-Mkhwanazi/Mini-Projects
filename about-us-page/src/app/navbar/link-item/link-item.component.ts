import { Component, input, output } from '@angular/core';
import { linkItem } from '../navbar.model';

@Component({
  selector: 'app-link-item',
  imports: [],
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.css'
})
export class LinkItemComponent {
  linkItem = input.required<linkItem>();
  isActive = input.required<boolean>()
  getOut = output<String>();

  beActive() {
    this.getOut.emit(this.linkItem().id);
  }
}
