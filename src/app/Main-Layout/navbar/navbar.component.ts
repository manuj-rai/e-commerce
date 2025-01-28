import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isCartDropdownOpen = false;
  isProfileDropdownOpen = false;
  isMenuDropdownOpen = false;

  ngOnInit(): void {
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark');
    }
  }

  toggleCartDropdown(): void {
    this.isCartDropdownOpen = !this.isCartDropdownOpen;
    this.isProfileDropdownOpen = false; 
    this.isMenuDropdownOpen = false;
  }

  toggleProfileDropdown(): void {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
    this.isCartDropdownOpen = false; 
    this.isMenuDropdownOpen = false;
  }

  toggleMenuDropdown(): void {
    this.isMenuDropdownOpen = !this.isMenuDropdownOpen;
    this.isProfileDropdownOpen = false; 
    this.isCartDropdownOpen = false; 
  }

  toggleDarkMode(): void {
    const body = document.body;
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('darkMode', String(isDarkMode));
  }

}
