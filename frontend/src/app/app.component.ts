import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './components/welcome.component';
import { NavbarComponents } from "./components/navbar/navbar.components";


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <app-nav-bar />
    <main class="container mx-auto">
   
    </main>
  `,
  styles: [],
  imports: [RouterOutlet, WelcomeComponent, NavbarComponents],
})
export class AppComponent {}
