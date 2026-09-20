import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Facility {
  number: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-facilities',
  imports: [RouterLink],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.css'
})
export class FacilitiesComponent {

  facilities: Facility[] = [
    {
      number: '01',
      title: 'Strength Training',
      description:
        'A focused training space to build strength, improve performance, and push your limits.',
      image: 'images/girl_biceps.png'
    },
    {
      number: '02',
      title: 'Cardio',
      description:
        'Keep moving, improve endurance, and make cardio a consistent part of your training.',
      image: 'images/girl_cardio.png'
    },
    {
      number: '03',
      title: 'Functional Training',
      description:
        'Train movement, conditioning, and overall performance with functional workouts.',
      image: 'images/functional_girl.png'
    }
  ];
}