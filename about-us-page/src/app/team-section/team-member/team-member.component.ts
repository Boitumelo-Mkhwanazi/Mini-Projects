import { Component, input, output } from '@angular/core';

import { teamMember } from './team-member.model';

@Component({
  selector: 'app-team-member',
  imports: [],
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.css'
})
export class TeamMemberComponent {
  data = input.required<teamMember>();
  outputData = output<string>();
  showDialog  = output<boolean>();

  onSelectUser() {
    this.outputData.emit(this.data().id);
  }
}
