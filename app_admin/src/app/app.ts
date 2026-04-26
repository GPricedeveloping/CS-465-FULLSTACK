import { Component } from '@angular/core';
import { TripListing } from './trip-listing/trip-listing';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], 
  templateUrl: './app.html'
})
export class App {
  title = 'travlr';
}