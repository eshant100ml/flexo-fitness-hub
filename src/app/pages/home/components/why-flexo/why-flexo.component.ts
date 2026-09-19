import { Component } from '@angular/core';

interface WhyFlexoPoint {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-flexo',
  imports: [],
  templateUrl: './why-flexo.component.html',
  styleUrl: './why-flexo.component.css'
})
export class WhyFlexoComponent {

  points: WhyFlexoPoint[] = [
    {
      number: '01',
      title: 'Train With Purpose',
      description: 'Build strength, improve fitness, and make every workout count.'
    },
    {
      number: '02',
      title: 'Modern Training Environment',
      description: 'A focused space designed to keep you motivated throughout your fitness journey.'
    },
    {
      number: '03',
      title: 'Guidance That Matters',
      description: 'Get the support and guidance you need to train with confidence.'
    }
  ];

}