import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { TripDataService } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTripComponent implements OnInit {

  editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {

    // 🔹 get tripCode from localStorage
    const tripCode = localStorage.getItem('tripCode');

    if (!tripCode) {
      alert("Couldn't find tripCode");
      this.router.navigate(['']);
      return;
    }

    console.log('Editing trip:', tripCode);

    // 🔹 build form
    this.editForm = this.formBuilder.group({
      _id: [''],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    // 🔹 fetch trip from API
    this.tripDataService.getTrip(tripCode).subscribe({
      next: (value: any) => {
        this.trip = value;

        // populate form with existing data
        this.editForm.patchValue(value);

        this.message = 'Trip loaded successfully';
        console.log(this.message);
      },
      error: (err: any) => {
        console.log('Error: ' + err);
      }
    });
  }

  // 🔹 submit updated trip
  public onSubmit(): void {
    this.submitted = true;
 
    if (this.editForm.invalid) return;

    this.tripDataService.updateTrip(this.editForm.value).subscribe({
      next: (value: any) => {
        console.log('Updated:', value);
        this.router.navigate(['']); // go back to list
      },
      error: (err: any) => {
        console.log('Error: ' + err);
      }
    });
  }

  // 🔹 helper getter for form validation
  get f() {
    return this.editForm.controls;
  }
}