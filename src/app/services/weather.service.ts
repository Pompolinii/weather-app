import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://localhost:7118/api/Cities'; 

  constructor(private http: HttpClient) {}

  getCities(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCity(city: { name: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, city);
  }
  

  deleteCity(name: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${name}`);
  }

  getWeatherForCity(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${name}/weather`);
  }
}
