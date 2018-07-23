import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: any;
  coords: {
    latitude:any,
    longitude:any,
  };
  city: any;

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider) {

  }

  ionViewWillEnter(){
    this.coords = {
      latitude: '38.123',
      longitude: '-78.543'
    }
    this.city = 'Bucharest';
    this.weather = {};
    // this.weatherProvider.getWeatherByCoords(this.coords.latitude, this.coords.longitude)
    // .subscribe(weather => {
    //   this.weather = weather.data[0];
    //   console.log(this.weather);
    // });
    this.weatherProvider.getWeatherByCity(this.city)
    .subscribe(weather => {
      this.weather = weather.data[0];
      console.log(this.weather)
    });
    console.log(this.weather);
  }
}
