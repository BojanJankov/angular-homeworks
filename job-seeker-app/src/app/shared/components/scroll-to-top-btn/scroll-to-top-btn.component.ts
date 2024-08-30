import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top-btn.component.html',
  styleUrl: './scroll-to-top-btn.component.scss',
})
export class ScrollToTopBtnComponent implements OnInit {
  windowScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.scrollY !== 0;
    });
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
