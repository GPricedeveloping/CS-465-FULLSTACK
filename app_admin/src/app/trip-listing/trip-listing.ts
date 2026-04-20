import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { trips as TRIP_DATA } from '../data/trips';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListingComponent implements OnInit {

  trips: Trip[] = TRIP_DATA;
  message: string = '';

  constructor(private router: Router) {}

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  ngOnInit(): void {
    console.log('STATIC trips loaded:', this.trips);
  }
}