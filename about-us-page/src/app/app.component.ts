import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";

import { linkItem } from './navbar/navbar.model';
import { CategoryComponent } from './team-section/category/category.component';
import { teamMember } from './team-section/team-member/team-member.model';
import { TeamMemberComponent } from './team-section/team-member/team-member.component';

@Component({
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NavbarComponent, CategoryComponent, TeamMemberComponent]
})
export class AppComponent {
  categories : linkItem[] = [
    {
      id: '1',
      name: 'Frontend Developers',
    }, 
    {
      id: '2',
      name: 'Backend Developers',
    },
    {
      id: '3',
      name: 'UI/UX Designers'
    },
    {
      id: '4',
      name: 'Product Managers'
    }
  ]

  teamMembers: teamMember[] = [
    {
        id: '1',
        image: 'person.png',
        name: 'Alice Smith',
        role: 'Frontend Developer',
        course: 'Computer Science',
        experience: '3 years'
    },
    {
        id: '2',
        image: 'person.png',
        name: 'Bob Johnson',
        role: 'Backend Developer',
        course: 'Information Technology',
        experience: '5 years'
    },
    {
        id: '3',
        image: 'person.png',
        name: 'Charlie Brown',
        role: 'UI/UX Designer',
        course: 'Information Systems',
        experience: '2 years'
    },
    {
        id: '4',
        image: 'person.png',
        name: 'Diana Miller',
        role: 'Frontend Developer',
        course: 'Information Technology',
        experience: '4 years'
    },
    {
        id: '5',
        image: 'person.png',
        name: 'Ethan Davis',
        role: 'Backend Developer',
        course: 'Computer Science',
        experience: '6 years'
    },
    {
        id: '6',
        image: 'person.png',
        name: 'Fiona Wilson',
        role: 'UI/UX Designer',
        course: 'Information Technology',
        experience: '1 year'
    },
    {
        id: '7',
        image: 'person.png',
        name: 'George Garcia',
        role: 'Frontend Developer',
        course: 'Information Systems',
        experience: '2 years'
    },
    {
        id: '8',
        image: 'person.png',
        name: 'Hannah Rodriguez',
        role: 'Backend Developer',
        course: 'Information Technology',
        experience: '7 years'
    }
];
}