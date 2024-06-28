import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {}

  navigateToBooks() {
    this.router.navigate(['/books']);
  }


  navigateToAuthors() {
    this.router.navigate(['/authors']);
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }
  
}
