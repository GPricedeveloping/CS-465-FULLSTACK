import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';
import { RouterModule } from '@angular/router';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard, RouterModule],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css']
})
export class TripListing implements OnInit {

  trips: any[] = [];

  constructor(
    private tripService: TripData,
    private cdr: ChangeDetectorRef // 
  ) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe({
      next: (data) => {
        console.log('🔥 Trips from API:', data);

        this.trips = [...data]; // new reference

        this.cdr.detectChanges(); //  UI UPDATE
      },
      error: (err) => {
        console.error('❌ Error loading trips:', err);
      }
    });
  }
}