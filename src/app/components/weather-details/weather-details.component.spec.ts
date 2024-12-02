import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    if (this.city) {
      this.weatherService.getWeatherForCity(this.city).subscribe(data => {
        this.weatherData = data;
      });
    }
  }
}
