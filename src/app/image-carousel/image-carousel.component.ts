import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-image',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ImageCarouselComponent implements OnInit {
  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextImage();
    }, 3000); // Change image every 3 seconds
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % 3;
  }
}
