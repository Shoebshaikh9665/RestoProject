import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems = [
    {
      name: 'Chicken Burger',
      description: 'A juicy chicken burger with fresh ingredients.',
      price: 115,
      image: 'assets/burger.jpg'
    },
    {
      name: 'Pizza Margherita',
      description: 'Classic Italian pizza with fresh basil.',
      price: 120,
      image: 'assets/pizza.jpg'
    },
    {
      name: 'Pasta Carbonara',
      description: 'Creamy pasta with bacon and parmesan.',
      price: 95,
      image: 'assets/pasta.jpg'
    }
  ];

  
}
