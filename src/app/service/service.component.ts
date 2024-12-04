import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  services = [
    {
      title: 'Catering Services',
      description: 'Delicious food tailored to your events and celebrations.',
      image: 'assets/catering1.jpg',
    },
    {
      title: 'Online Orders',
      description: 'Order your favorite dishes online with quick delivery.',
      image: 'assets/delvrylogo.png',
    },
    {
      title: 'Event Hosting',
      description: 'Host memorable events with our spacious venues.',
      image: 'assets/eventhostng.jpg',
    },
    {
      title: 'Customized Menus',
      description: 'Create menus that suit your taste and preferences.',
      image: 'assets/menu1.jpg',
    },
  ];
  constructor(private router:Router) {}

  navigateToOrders() {
    this.router.navigate(['/order']);
  }
}
