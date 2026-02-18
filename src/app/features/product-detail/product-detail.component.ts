import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Clock, LucideAngularModule, Minus, Plus, Star, Truck } from 'lucide-angular';
import { MOCK_PRODUCTS } from '../../core/mocks/products.mock';
import { Product } from '../../core/models/product.model';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, LucideAngularModule, ButtonComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);

  // Icons
  readonly Star = Star;
  readonly Clock = Clock;
  readonly Truck = Truck;
  readonly Minus = Minus;
  readonly Plus = Plus;

  product: Product | undefined;
  quantity = 1;
  activeImage = '';
  selectedSizeId = '';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = MOCK_PRODUCTS.find((p) => p.id === id);

    if (this.product?.images && this.product.images.length > 0) {
      this.activeImage = this.product.images[0];
    } else if (this.product?.image) {
      this.activeImage = this.product.image;
    }

    if (this.product?.sizes && this.product.sizes.length > 0) {
      this.selectedSizeId = this.product.sizes[0].id;
    }
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  setActiveImage(image: string): void {
    this.activeImage = image;
  }

  selectSize(sizeId: string): void {
    this.selectedSizeId = sizeId;
  }

  toggleExtra(extraId: string): void {
    if (this.product?.extras) {
      const extra = this.product.extras.find((e) => e.id === extraId);
      if (extra) {
        extra.selected = !extra.selected;
      }
    }
  }

  calculateTotal(): number {
    if (!this.product) return 0;

    let total = this.product.price;

    // Add selected size price
    if (this.selectedSizeId && this.product.sizes) {
      const size = this.product.sizes.find((s) => s.id === this.selectedSizeId);
      if (size) total += size.price;
    }

    // Add selected extras prices
    if (this.product.extras) {
      this.product.extras.forEach((extra) => {
        if (extra.selected) total += extra.price;
      });
    }

    return total * this.quantity;
  }

  addToCart(): void {
    console.log('Added to cart:', {
      product: this.product,
      quantity: this.quantity,
      selectedSize: this.selectedSizeId,
      extras: this.product?.extras?.filter((e) => e.selected),
      total: this.calculateTotal(),
    });
  }
}
