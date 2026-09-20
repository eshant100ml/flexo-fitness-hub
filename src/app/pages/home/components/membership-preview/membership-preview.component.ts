import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MembershipPlan {
  name: string;
  duration: string;
  price: string;
  description: string;
  featured?: boolean;
}

@Component({
  selector: 'app-membership-preview',
  imports: [RouterLink],
  templateUrl: './membership-preview.component.html',
  styleUrl: './membership-preview.component.css'
})
export class MembershipPreviewComponent {

  plans: MembershipPlan[] = [
    {
      name: 'Monthly',
      duration: '1 Month',
      price: '₹1500 - ₹2000',
      description: 'Flexible membership for your fitness journey.'
    },
    {
      name: 'Quarterly',
      duration: '3 Months',
      price: '₹4000 - ₹5500',
      description: 'Stay consistent and keep your momentum going.',
      featured: true
    },
    {
      name: 'Half Yearly',
      duration: '6 Months',
      price: '₹7500 - ₹10000',
      description: 'A longer commitment to a stronger you.'
    }
  ];

}