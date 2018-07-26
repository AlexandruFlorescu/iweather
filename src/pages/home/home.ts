import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { ToastController } from 'ionic-angular';

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
  error: any;

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider, private toastCtrl:ToastController) {

  }

  ionViewWillEnter(){
    this.coords = {
      latitude: '38.123',
      longitude: '-78.543'
    }
    this.city = 'Rome';
    // this.weatherProvider.getWeatherByCoords(this.coords.latitude, this.coords.longitude)
    // .subscribe(weather => {
    //   this.weather = weather[0];
    //   console.log(this.weather);
    // });
    this.weatherProvider.getWeatherByCity(this.city)
    .subscribe(weather => {
      this.weather = weather[0];
      console.log(this.weather);
    });
  }

  changeCity(){
    if(this.city)
      this.weatherProvider.getWeatherByCity(this.city)
      .subscribe(weather => {
        this.weather = weather[0];
        this.error=null;
        console.log(this.weather);
      }, error=>
      {this.error = error
        let toast = this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'top',
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
      });
  }
}
