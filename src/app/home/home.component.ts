import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showBookingForm = false;

  booking = {
    name: '',
    email: '',
    date: '',
    time: '',
  };

  constructor(private http: HttpClient) {}

  toggleBookingForm() {
    this.showBookingForm = !this.showBookingForm;
  }

  onSubmitBooking() {
    this.http.post('http://localhost:3001/bookings', this.booking).subscribe({
      next: (response: any) => {
        alert('Your table has been booked successfully!');
        this.booking = { name: '', email: '', date: '', time: '' }; // Reset form
        this.toggleBookingForm(); // Close the modal
      },
      error: (error) => {
        console.error('Error details:', error);
        alert('Something went wrong. Please try again later.');
      },
    });
  }
}
