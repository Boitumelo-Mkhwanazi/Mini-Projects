import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { CategoryItemComponent } from "./team-section/category-item/category-item.component";
import { User } from './team-section/user.model';
import { TeamMemberComponent } from "./team-section/team-member/team-member.component";

interface LinkType {
  id: string,
  text: string
}

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, CategoryItemComponent, TeamMemberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedCategoryCareer!: string;

  categories: LinkType[] = [
    {
      id: '1',
      text: 'View All'
    }, 
    {
      id: '2',
      text: 'UI/UX Designer'
    },
    {
      id: '3',
      text: 'Software Engineer'
    },
    {
      id: '4',
      text: 'Software Tester'
    },
    {
      id: '5',
      text: 'Marketing'
    }
  ]

  users: User[] = [
    {
        id: "1",
        name: "Boitumelo Mkhwanazi",
        title: "Software Engineer",
        image: "team-member-2.avif"
    },
    {
        id: "2",
        name: "Jane Smith",
        title: "UI/UX Designer",
        image: "team-member-2.avif"
    },
    {
        id: "3",
        name: "Alice Johnson",
        title: "Marketing",
        image: "team-member-2.avif"
    },
    {
        id: "4",
        name: "Bob Brown",
        title: "Software Tester",
        image: "team-member-2.avif"
    },
    {
        id: "5",
        name: "Charlie Davis",
        title: "UI/UX Designer",
        image: "team-member-2.avif"
    },
    {
        id: "6",
        name: "Diana Evans",
        title: "Marketing",
        image: "team-member-2.avif"
    },
    {
        id: "7",
        name: "Ethan Green",
        title: "Software Engineer",
        image: "team-member-2.avif"
    },
    {
        id: "8",
        name: "Fiona Harris",
        title: "Software Tester",
        image: "team-member-2.avif"
    },
    {
        id: "9",
        name: "George Clark",
        title: "Marketing",
        image: "team-member-2.avif"
    },
    {
        id: "10",
        name: "Hannah Lewis",
        title: "Software Engineer",
        image: "team-member-2.avif"
    },
    {
        id: "11",
        name: "Ian Walker",
        title: "UI/UX Designer",
        image: "team-member-2.avif"
    },
    {
        id: "12",
        name: "Jessica Hall",
        title: "Marketing",
        image: "team-member-2.avif"
    }
  ];

  onSelectedCategory(selectedUserCareer: string) {
    this.selectedCategoryCareer = selectedUserCareer;
  }

  get selectedCareerArray () {
    if ( this.selectedCategoryCareer === "View All") {
      return this.users;
    }
    return this.users.filter((user) => user.title === this.selectedCategoryCareer);
  }
  
}
