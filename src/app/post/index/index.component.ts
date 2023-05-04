import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../post.service';
import { WeatherResponse } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  weatherData !: WeatherResponse ;
     
  
  constructor(public postService: WeatherService) { }
  ngOnInit(): void {
    this.postService.get().subscribe((data: WeatherResponse)=>{
      this.weatherData = data;
      console.log(this.weatherData);
    })  
  }
  

}
