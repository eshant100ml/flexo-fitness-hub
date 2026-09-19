import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Facility {
  number: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-facilities-preview',
  imports: [RouterLink],
  templateUrl: './facilities-preview.component.html',
  styleUrl: './facilities-preview.component.css'
})
export class FacilitiesPreviewComponent {

  
  facilities: Facility[] = [
  {
    number: '01',
    title: 'Strength Training',
    description: 'Build strength and push your limits with focused training.',
    image: 'images/strength_trainning.png'
  },
  {
    number: '02',
    title: 'Cardio',
    description: 'Keep moving, improve endurance, and stay active.',
    image: 'images/Cardio.png'
  },
  {
    number: '03',
    title: 'Functional Training',
    description: 'Train smarter with workouts focused on movement and performance.',
    image: 'images/functional_trainning.png'
  }
];
}