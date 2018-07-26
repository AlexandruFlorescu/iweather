import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  url: any;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'https://api.weatherbit.io/v2.0/current?key=a6e28c2b0a6248fab58b67bcb94dc70e&';
  }

  getWeatherByCoords(latitude, longitude){
    // var headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin' : '*',
    //   "X-Requested-With": "XMLHttpRequest"
    // });
    return this.http
      .get( this.url + 'lat=' + latitude + '&lon=' + longitude)
      .map(res=> res.data);
  }

  getWeatherByCity(city){
    return this.http
      .get( this.url + 'city=' + city)
      .map(res=> res.data);
    }


}
