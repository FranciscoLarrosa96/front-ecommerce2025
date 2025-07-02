import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected title = 'front';
  isDrawerOpen = false;

  ngAfterViewInit() {
    // Le damos un pequeño delay para evitar conflictos
    setTimeout(() => {
      AOS.init({
        duration: 800,
        once: false,
        easing: 'ease-in-out',
      });
    }, 0);
  }
}
