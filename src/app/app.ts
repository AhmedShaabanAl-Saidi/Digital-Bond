import { Component, signal } from '@angular/core';
import { Footer } from './layouts/footer/footer';
import { Navbar } from './layouts/navbar/navbar';
import { HeroSection } from './components/hero-section/hero-section';
import { AboutUs } from './components/about-us/about-us';
import { Services } from './components/services/services';
import { Reviews } from './components/reviews/reviews';
import { ContactUs } from './components/contact-us/contact-us';

@Component({
  selector: 'app-root',
  imports: [Footer, Navbar, HeroSection, AboutUs, Services, Reviews, ContactUs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Digital-Bond');
}
