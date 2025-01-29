import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Main-Layout/navbar/navbar.component";
import { TopSliderComponent } from "./Main-Layout/top-slider/top-slider.component";
import { CarouselComponent } from "./Main-Layout/carousel/carousel.component";
import { FooterComponent } from "./Main-Layout/footer/footer.component";
import { CategoriesComponent } from "./Main-Layout/categories/categories.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TopSliderComponent, CarouselComponent, FooterComponent, CategoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tailwind-app';

}
