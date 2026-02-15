import { Component } from '@angular/core';
import { Apple, LucideAngularModule, Smartphone } from 'lucide-angular';

@Component({
  selector: 'app-promo-section',
  imports: [LucideAngularModule],
  templateUrl: './promo-section.component.html',
  styleUrl: './promo-section.component.scss',
})
export class PromoSectionComponent {
  readonly Apple = Apple;
  readonly Smartphone = Smartphone;
}
