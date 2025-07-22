import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-root',
  imports: [CommonModule,Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnInit {

  protected title = 'front';
  isDarkMode = false;
  


  ngOnInit(): void {
  }


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


  /**
   * Configura el modo oscuro según la preferencia del usuario o del sistema
   * y actualiza la clase del HTML.
   */
  configDarkMode() {
    // Detecta si el sistema está en modo oscuro
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Si el usuario ya eligió un modo antes, respetalo
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = prefersDark;
    }
  }

  /**
   * Toggle dark mode
   */
  updateDarkModeClass(): void {
    const html = document.documentElement;
    if (this.isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const htmlElement = document.documentElement;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');

    if (this.isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }

}
