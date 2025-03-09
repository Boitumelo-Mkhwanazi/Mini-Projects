import { Component, input, signal } from '@angular/core';

import { linkItem } from '../../navbar/navbar.model';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  catergory = input.required<linkItem>();
}
