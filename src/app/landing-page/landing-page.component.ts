import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {
  isLoaded = false;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToArticles() {
    this.router.navigate(['/articles']);
  }
}