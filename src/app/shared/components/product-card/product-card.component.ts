import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Star } from 'lucide-angular';
import { Product } from '../../../core/models/product.model';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-product-card',
  imports: [ButtonComponent, LucideAngularModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly Star = Star;

  @Input() product!: Product;

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.onerror = null;
    img.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400';
  }
}
