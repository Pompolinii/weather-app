import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';  // Importujemy CommonModule

@Component({
  selector: 'app-city-manager',
  standalone: true, 
  imports: [CommonModule] , 
  templateUrl: './city-manager.component.html',
  styleUrls: ['./city-manager.component.css'],
})
export class CityManagerComponent implements OnInit {
  cities: any[] = [];
  selectedCity: any = {};
  weather: any = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities(): void {
    this.weatherService.getCities().subscribe((data) => {
      this.cities = data;
    });
  }

  addCity(cityName: string): void {
    this.weatherService.addCity({ name: cityName}).subscribe(() => {
      this.loadCities();
    });
  }

  deleteCity(cityName: string): void {
    this.weatherService.deleteCity(cityName).subscribe(() => {
      this.loadCities();
    });
  }

  getWeather(cityName: string): void {
    this.weatherService.getWeatherForCity(cityName).subscribe((data) => {
      this.weather = data;
    });
  }
}
