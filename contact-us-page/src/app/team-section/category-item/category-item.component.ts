import { Component, input, output } from '@angular/core';

interface CategoryType {
  id: string,
  text: string
}

@Component({
  selector: 'app-category-item',
  imports: [],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css'
})
export class CategoryItemComponent {
  category = input.required<CategoryType>();
  selectedCategoryItem = input.required<boolean>();
  selectedCategory = output<string>();

  onSelect() {
    this.selectedCategory.emit(this.category().text);
  }
}
