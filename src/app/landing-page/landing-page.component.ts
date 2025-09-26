import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  
  isLoaded = false;
  
  private router = inject(Router);
  
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
  
  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
  
  navigateToArticles(): void {
    this.router.navigate(['/articles']);
  }

}
