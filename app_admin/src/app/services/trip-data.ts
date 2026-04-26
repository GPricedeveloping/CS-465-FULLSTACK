import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripData {

  private url = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  public getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  public getTrip(code: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.url}/${code}`);
  }

  public addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  public updateTrip(code: string, formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.url}/${code}`, formData);
  }

  public deleteTrip(code: string): Observable<any> {
  return this.http.delete(`${this.url}/${code}`);
}
}