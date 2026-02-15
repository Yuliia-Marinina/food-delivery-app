import { Component } from '@angular/core';
import { PromoSectionComponent } from '../../shared/components/promo-section/promo-section.component';

@Component({
  selector: 'app-home',
  imports: [PromoSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
