import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private url = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  // GET ALL trips
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  // ADD trip
  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  // GET ONE trip
  getTrip(tripCode: string): Observable<Trip> {
  return this.http.get<Trip>(this.url + '/' + tripCode);
  }

  // UPDATE trip
  updateTrip(formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(
      this.url + '/' + formData.code,
      formData
    );
  }
}