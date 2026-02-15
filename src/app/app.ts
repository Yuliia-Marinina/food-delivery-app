import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatingButtonsComponent } from './shared/components/floating-buttons.component/floating-buttons.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PromoSectionComponent } from './shared/components/promo-section.component/promo-section.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    PromoSectionComponent,
    FloatingButtonsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('food-delivery-app');
}
