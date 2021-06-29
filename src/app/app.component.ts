import { APIError, WeatherInfo } from './app.model';
import { Component, OnDestroy } from '@angular/core';

import { APIService } from './api.service';
import { FormControl } from '@angular/forms';
import { Subscription, } from 'rxjs';

declare const server_properties;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  public searchControl = new FormControl('');
  private weatherSubscription: Subscription;
  public loading = false;
  public error: APIError;
  public weatherInfo: WeatherInfo = null;
  public iconBaseUrl = server_properties.iconUrl;
  constructor(private _apiService: APIService){}
  public emitSearchEvent(){
    if(!this.loading && this.searchControl.value){
      this.loading = true;
      this.error = null;
      this.weatherInfo = null;
      this.weatherSubscription = this._apiService.getWeather(this.searchControl.value).subscribe(
        response =>{
        this.loading = false;
        if(response.error){
          this.error = response.error;
        }
        this.weatherInfo = response.data
      },
      error => {
        this.loading = false
        this.error = error;
        console.log(error);
      })
    }
  }
  public ngOnDestroy(){
    if(this.weatherSubscription){
      this.weatherSubscription.unsubscribe()
    }
  }
}
