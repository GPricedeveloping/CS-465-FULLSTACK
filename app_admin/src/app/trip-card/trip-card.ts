import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrls: ['./trip-card.css']
})
export class TripCard {

  @Input() trip: any;

  constructor(
    private router: Router,
    private tripService: TripData
  ) {}

  // 
  editTrip(code: string): void {
    this.router.navigate(['/edit-trip', code]);
  }

  // 
  deleteTrip(code: string): void {
    console.log('DELETE CLICKED:', code);

    if (confirm('Are you sure you want to delete this trip?')) {
      this.tripService.deleteTrip(code).subscribe({
        next: (res) => {
          console.log('DELETE SUCCESS:', res);
          window.location.reload();
        },
        error: (err) => {
          console.log('DELETE ERROR:', err);
        }
      });
    }
  }
}