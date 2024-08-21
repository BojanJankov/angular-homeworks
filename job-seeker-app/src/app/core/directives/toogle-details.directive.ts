import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appToogleDetails]',
  standalone: true,
})
export class ToogleDetailsDirective implements OnInit {
  private elRef = inject(ElementRef);
  private renderer = inject(Renderer2);
  jobDetailsElement: HTMLDivElement;
  isOpen: boolean = false;

  constructor() {}
  ngOnInit(): void {
    this.jobDetailsElement =
      this.elRef.nativeElement.querySelector('.more-details');

    this.renderer.setStyle(
      this.jobDetailsElement,
      'display',
      this.isOpen ? 'block' : 'none'
    );
  }

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
    this.renderer.setStyle(
      this.jobDetailsElement,
      'display',
      this.isOpen ? 'block' : 'none'
    );
  }
}
