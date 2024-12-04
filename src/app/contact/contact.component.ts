import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3001/contact', this.contact)
      .subscribe({
        next: (response: any) => {
          alert('Thank you for contacting us!');
          this.contact = { name: '', email: '', message: '' }; // Reset form
        },
        error: (error) => {
          console.error('Error details:', error);
          alert('Something went wrong. Please try again later.');
        }
      });
  }



}
