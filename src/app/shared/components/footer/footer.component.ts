import { Component } from '@angular/core';
import {
  LucideAngularModule,
  MessageCircleCode,
  MessageSquareCode,
  SmilePlus,
} from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly MessageSquareCode = MessageSquareCode;
  readonly MessageCircleCode = MessageCircleCode;
  readonly SmilePlus = SmilePlus;

  cartItemsCount = 3; // Example cart item count
}
