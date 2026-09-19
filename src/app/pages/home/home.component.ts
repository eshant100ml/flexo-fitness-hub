import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { WhyFlexoComponent } from './components/why-flexo/why-flexo.component';
import { FacilitiesPreviewComponent } from './components/facilities-preview/facilities-preview.component';
import { MembershipPreviewComponent } from './components/membership-preview/membership-preview.component';
import { FreeTrialCtaComponent } from './components/free-trial-cta/free-trial-cta.component';
import { LocationPreviewComponent } from './components/location-preview/location-preview.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    HighlightsComponent,
    WhyFlexoComponent,
    FacilitiesPreviewComponent,
    MembershipPreviewComponent,
    FreeTrialCtaComponent,
    LocationPreviewComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}