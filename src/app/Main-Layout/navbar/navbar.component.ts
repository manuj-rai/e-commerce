import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit  {
  isActive = false;

  ngOnInit(): void {
    this.triggerCartDropdownClick();
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark');
    }
  }

  toggleClass() {
    this.isActive = !this.isActive;
  }

  toggleDarkMode(): void {
    const body = document.body;

    // Toggle dark mode class on the body
    body.classList.toggle('dark');

    // Save the preference in localStorage
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('darkMode', String(isDarkMode));
  }

  private triggerCartDropdownClick(): void {
    // Get the element by its ID (ensure it's not null before calling click)
    const cartDropdownButton = document.getElementById('myCartDropdownButton1');

    // Check if the element exists and then trigger the click
    if (cartDropdownButton) {
      cartDropdownButton.click();
    }
  }
}
