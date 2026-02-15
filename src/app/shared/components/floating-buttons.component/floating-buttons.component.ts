import { Component, Input } from '@angular/core';
import { HelpCircle, LucideAngularModule, ShoppingCart } from 'lucide-angular';

@Component({
  selector: 'app-floating-buttons',
  imports: [LucideAngularModule],
  templateUrl: './floating-buttons.component.html',
  styleUrl: './floating-buttons.component.scss',
})
export class FloatingButtonsComponent {
  readonly HelpCircle = HelpCircle;
  readonly ShoppingCart = ShoppingCart;

  @Input() cartItemsCount: number = 0;
}
