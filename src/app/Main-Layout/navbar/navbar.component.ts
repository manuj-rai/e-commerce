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
  isDrawerOpen = false;


  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
      }
    }
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.isProfileDropdownOpen = false; 
    this.isCartDropdownOpen = false; 
  }

  toggleCartDropdown(): void {
    this.isCartDropdownOpen = !this.isCartDropdownOpen;
    this.isProfileDropdownOpen = false; 
    this.isDrawerOpen = false;
  }

  toggleProfileDropdown(): void {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
    this.isCartDropdownOpen = false; 
    this.isDrawerOpen = false;
  }

  toggleDarkMode(): void {
    const body = document.body;
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');
    localStorage.setItem('darkMode', String(isDarkMode));
  }

}
