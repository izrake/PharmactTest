import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  weatherData:any;
  constructor(testService:TestService) { 
    testService.getWeatherForecast().subscribe(s => {
      if(s)
      {
       this.weatherData = s;
      }
    });
  }

  ngOnInit() {
  }

}
