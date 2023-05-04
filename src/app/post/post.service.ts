import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { WeatherResponse } from './post';
    
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    
  private apiURL = "https://localhost:44374/api";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<WeatherResponse[]> {
    return this.httpClient.get<WeatherResponse[]>(this.apiURL + '/Weather/Get3Days')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  get(): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherResponse>(this.apiURL + '/Weather/Get3Days')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
