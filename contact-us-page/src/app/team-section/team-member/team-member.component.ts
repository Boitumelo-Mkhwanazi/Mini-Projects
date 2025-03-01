import { Component, input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-team-member',
  imports: [],
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.css'
})
export class TeamMemberComponent {
  user = input.required<User>();
}
