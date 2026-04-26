import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrls: ['./edit-trip.css']
})
export class EditTrip implements OnInit {

  addForm!: FormGroup;
  submitted = false;
  tripCode!: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tripService: TripData
  ) {}

  ngOnInit(): void {
    console.log('🔥 EDIT COMPONENT LOADED');

    // get trip code from URL
    this.tripCode = this.route.snapshot.paramMap.get('code') || '';

    // build form
    this.addForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    // load trip data
    this.tripService.getTrip(this.tripCode).subscribe({
      next: (trip: Trip) => {

        // fix date format for input[type="date"]
        const formattedTrip = {
          ...trip,
          start: trip.start
            ? new Date(trip.start).toISOString().split('T')[0]
            : ''
        };

        this.addForm.patchValue(formattedTrip);
      },
      error: (err: any) => {
        console.log('Error loading trip:', err);
      }
    }); // 
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.addForm.valid) {
      this.tripService.updateTrip(this.tripCode, this.addForm.value)
        .subscribe({
          next: (data: any) => {
            console.log('Updated:', data);
            this.router.navigate(['/']);
          },
          error: (err: any) => {
            console.log('Error updating:', err);
          }
        });
    }
  }

  get f() {
    return this.addForm.controls;
  }
}