import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AsideComponent } from "./sidebar/aside/aside.component";

@Component({
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AsideComponent]
})
export class AppComponent {
  title = 'dashboard-page';
}
