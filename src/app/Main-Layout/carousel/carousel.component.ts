import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  standalone: true,
  imports:[CommonModule, NgFor]
})
export class CarouselComponent implements OnInit, OnDestroy {
  images = [
    'https://flowbite.com/docs/images/carousel/carousel-1.svg',
    'https://flowbite.com/docs/images/carousel/carousel-2.svg',
    'https://flowbite.com/docs/images/carousel/carousel-3.svg',
    'https://flowbite.com/docs/images/carousel/carousel-4.svg',
    'https://flowbite.com/docs/images/carousel/carousel-5.svg',
  ];

    currentSlide = 0;
    private intervalId!: any;
  
    ngOnInit(): void {
      this.startAutoSlide();
    }

    ngOnDestroy(): void {
      this.stopAutoSlide();
    }
  
    prevSlide(): void {
      this.currentSlide =
        (this.currentSlide - 1 + this.images.length) % this.images.length;
    }
  
    nextSlide(): void {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    }
  
    startAutoSlide(): void {
      this.stopAutoSlide(); // Ensure no multiple intervals are running
      this.intervalId = window.setInterval(() => {
        this.nextSlide();
      }, 3000); // Slide every 3 seconds
    }
  
    stopAutoSlide(): void {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = 0; // Reset the interval ID
      }
    }
  
  }
  
