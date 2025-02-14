import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { AsideComponent } from "./sidebar/aside/aside.component";
import { MainComponent } from "./main/main/main.component";

@Component({
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AsideComponent, MainComponent]
})
export class AppComponent {
  title = 'dashboard-page';
  menuOpen: boolean = false;

  isMenuOpen(openMenu: boolean) {
    this.menuOpen = openMenu;
  }
}
