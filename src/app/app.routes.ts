import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'facilities',
    component: FacilitiesComponent
  },
  {
    path: 'membership',
    component: MembershipComponent
  },
  {
    path: 'trainers',
    component: TrainerComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];