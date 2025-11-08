import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  url: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  titles = ['Hosbect Chekresh', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'];
  titleNumber = 0;
  private intervalId: any;

  socialLinks: SocialLink[] = [
    { name: 'X', url: 'https://twitter.com' },
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Instagram', url: 'https://instagram.com' }
  ];

  cvDownloadLink = '#';
  cvFileName = 'cv.pdf';

  getCircularTransform(index: number): string {
    const radius = 150; // Circle radius in pixels
    const totalTitles = this.titles.length;
    const angleDiff = (this.titleNumber - index) * (360 / totalTitles);
    const angleRad = (angleDiff * Math.PI) / 180;
    
    const x = radius * Math.sin(angleRad);
    const y = radius * (1 - Math.cos(angleRad));
    
    if (this.titleNumber === index) {
      return 'translate(0, 0)';
    }
    
    return `translate(${x}px, ${y}px)`;
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.titleNumber = (this.titleNumber + 1) % this.titles.length;
    }, 3000); // Change title every 3 seconds
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
