import { Component } from '@angular/core';
import { LucideAngularModule, MapPin, Search, ShoppingCart, User } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly ShoppingCart = ShoppingCart;
  readonly User = User;
  readonly Search = Search;
  readonly MapPin = MapPin;

  cartItemCount = 3; // Example cart item count
}
