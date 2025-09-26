import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
  
  private router = inject(Router);
  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  closeMenu(): void {
    this.isMenuOpen = false;
  }
  
  navigateAndCloseMenu(route: string): void {
    this.router.navigate([route]);
    this.closeMenu();
  }
  
  isCurrentRoute(route: string): boolean {
    return this.router.url === route || (route === '/' && this.router.url === '');
  }
}
