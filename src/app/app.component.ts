import { Component } from '@angular/core';
import { CityManagerComponent } from './components/city-manager/city-manager.component'; //
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CityManagerComponent], 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
}
