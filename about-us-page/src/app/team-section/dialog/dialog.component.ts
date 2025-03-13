import { Component, CUSTOM_ELEMENTS_SCHEMA, input, output } from '@angular/core';
import { teamMember } from '../team-member/team-member.model';

@Component({
  selector: 'app-dialog',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  dataInput = input.required<teamMember>();
  closeMenu = output<void>();

  onCloseDialog() {
    this.closeMenu.emit()
  }
}
