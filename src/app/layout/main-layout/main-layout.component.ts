import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatingButtonsComponent } from '../../shared/components/floating-buttons/floating-buttons.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FloatingButtonsComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
