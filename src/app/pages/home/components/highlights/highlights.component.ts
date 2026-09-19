import { Component } from '@angular/core';

interface Highlight {
  icon: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-highlights',
  imports: [],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.css'
})
export class HighlightsComponent {

  highlights: Highlight[] = [
    {
      icon: '👥',
      value: '300+',
      label: 'Happy Members'
    },
    {
      icon: '🏋',
      value: 'Modern',
      label: 'Equipment'
    },
    {
      icon: '🏆',
      value: 'Expert',
      label: 'Guidance'
    },
    {
      icon: '♥',
      value: 'A Healthier',
      label: '& Stronger You'
    }
  ];

}