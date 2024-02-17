import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CommonModule } from '@angular/common';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewMomentComponent,HeaderComponent, FooterComponent, HomeComponent, AboutComponent,RouterModule,RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'momentos';
}
