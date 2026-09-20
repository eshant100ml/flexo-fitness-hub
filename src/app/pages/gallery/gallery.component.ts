import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface GalleryImage {
  image: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  imports: [RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit, OnDestroy {

  images: GalleryImage[] = [
    {
      image: 'images/pic2 (2).png',
      title: 'FlexO Fitness Hub'
    },
    {
      image: 'images/pic2 (1).png',
      title: 'Training at FlexO'
    },
    {
      image: 'images/pic2 (3).png',
      title: 'Inside FlexO'
    },
    {
      image: 'images/pic2 (4).png',
      title: 'Strength Training'
    }
  ];

  currentIndex = 0;
  private slideInterval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  nextSlide(): void {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;

    this.restartAutoSlide();
  }

  previousSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) %
      this.images.length;

    this.restartAutoSlide();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.restartAutoSlide();
  }

  private startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }

  private stopAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  private restartAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}