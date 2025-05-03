import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './config';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private http: HttpClient) {}

  // ✅ Get all flights
  getAllFlights(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/flights`);
  }

  // ✅ Get a single flight by ID
  getFlightById(id: string): Observable<any> {
    return this.http.get(`${API_BASE_URL}/flights/${id}`);
  }

  // ✅ Create a new flight
  createFlight(flight: any): Observable<any> {
    return this.http.post(`${API_BASE_URL}/flights`, flight);
  }

  // ✅ Update a flight
  updateFlight(id: string, flight: any): Observable<any> {
    return this.http.put(`${API_BASE_URL}/flights/${id}`, flight);
  }

  // ✅ Delete a flight
  deleteFlight(id: string): Observable<any> {
    return this.http.delete(`${API_BASE_URL}/flights/${id}`);
  }

  // ✅ Create a new booking
  createBooking(booking: any): Observable<any> {
    return this.http.post(`${API_BASE_URL}/bookings`, booking);
  }

  // ✅ Get all bookings (optional)
  getAllBookings(): Observable<any> {
    return this.http.get(`${API_BASE_URL}/bookings`);
  }

  // ✅ Delete a booking (optional)
  deleteBooking(id: string): Observable<any> {
    return this.http.delete(`${API_BASE_URL}/bookings/${id}`);
  }
}
