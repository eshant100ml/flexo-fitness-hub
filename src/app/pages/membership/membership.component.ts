import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MembershipPlan {
  name: string;
  duration: string;
  strengthPrice: string;
  cardioPrice: string;
  description: string;
  featured?: boolean;
}

@Component({
  selector: 'app-membership',
  imports: [RouterLink],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.css'
})
export class MembershipComponent {

  plans: MembershipPlan[] = [
    {
      name: 'Monthly',
      duration: '1 Month',
      strengthPrice: '₹1,500',
      cardioPrice: '₹2,000',
      description:
        'Flexible membership for your fitness journey.'
    },
    {
      name: 'Quarterly',
      duration: '3 Months',
      strengthPrice: '₹4,000',
      cardioPrice: '₹5,500',
      description:
        'Stay consistent and keep your momentum going.',
      featured: true
    },
    {
      name: 'Half Yearly',
      duration: '6 Months',
      strengthPrice: '₹7,500',
      cardioPrice: '₹10,000',
      description:
        'A longer commitment to a stronger you.'
    }
  ];

}