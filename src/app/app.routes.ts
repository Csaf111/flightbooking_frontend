import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./flight.search/flights.component').then((m) => m.FlightsComponent)
  },
  {
    path: 'book',
    loadComponent: () =>
      import('./flight.book/booking.component').then((m) => m.BookingComponent)
  },
  {
    path: 'manage',
    loadComponent: () =>
      import('./flight.manage/manage.component').then((m) => m.ManageComponent)
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./authComponent/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'auth/signup',
    loadComponent: () =>
      import('./authComponent/signup/signup.component').then((m) => m.SignupComponent)
  }
];
