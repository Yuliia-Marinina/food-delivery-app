import { Component } from '@angular/core';
import { MOCK_PRODUCTS } from '../../core/mocks/products.mock';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { PromoSectionComponent } from '../../shared/components/promo-section/promo-section.component';

@Component({
  selector: 'app-home',
  imports: [PromoSectionComponent, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = MOCK_PRODUCTS;
}
