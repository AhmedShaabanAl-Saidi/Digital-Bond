import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;

  scrollToSection(sectionId: string): void {
    // Close the navbar on mobile
    this.closeNavbar();

    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  private closeNavbar(): void {
    // Check if navbar is open (has 'show' class)
    const navbarElement = this.navbarCollapse?.nativeElement;
    const togglerElement = this.navbarToggler?.nativeElement;

    if (navbarElement && navbarElement.classList.contains('show')) {
      // Remove 'show' class to close the navbar
      navbarElement.classList.remove('show');

      // Update aria-expanded attribute
      if (togglerElement) {
        togglerElement.setAttribute('aria-expanded', 'false');
        togglerElement.classList.add('collapsed');
      }
    }
  }
}