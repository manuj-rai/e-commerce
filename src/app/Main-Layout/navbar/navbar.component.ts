import { CommonModule } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  isCartDropdownOpen = false;
  isProfileDropdownOpen = false;
  isMenuDropdownOpen = false;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
      }
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
