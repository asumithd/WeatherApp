import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL
const API_KEY = environment.API_KEY

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  weatherData: any
  todayDate = new Date()
  cityName: any;
  wetherDetails: any;
  weatherIcon: any;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.loadData()

  }
  loadData() {
    this.http.get(`${API_URL}weather?lat=35&lon=139&appid=${API_KEY}`).subscribe((res) => {
      this.weatherData = res['main'];
      this.cityName = res['name'];
      this.wetherDetails = res['weather'][0];
      this.weatherIcon = 'http://openweathermap.org/img/wn/' + this.wetherDetails.icon + '@2x.png';
      console.log(res, this.cityName);

    })
  }
}
