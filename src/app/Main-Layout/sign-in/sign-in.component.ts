import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  isModalOpen = false;
  email = '';
  password = '';
  rememberMe = false;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  onSubmit() {
    console.log('Form submitted:', {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    });
    this.toggleModal();
  }

}
