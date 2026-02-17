import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MOCK_PRODUCTS } from '../../core/mocks/products.mock';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);

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

  addToCart(): void {
    console.log('Added to cart:', {
      product: this.product,
      quantity: this.quantity,
      selectedSize: this.selectedSizeId,
      extras: this.product?.extras?.filter((e) => e.selected),
    });
  }
}
