import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'HealthTracker';
  showNavbar = false;
  
  private router = inject(Router);
  
  ngOnInit(): void {
    // Listen to route changes to determine if navbar should be shown
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Hide navbar on landing page (root route)
      this.showNavbar = event.url !== '/';
    });
    
    // Set initial state
    this.showNavbar = this.router.url !== '/';
  }
}
