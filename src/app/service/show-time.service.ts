import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../model/movie/Movie";
import {ShowTime} from "../model/booking/ShowTime";

@Injectable({
  providedIn: 'root'
})
export class ShowTimeService {

  constructor(private httpClient:HttpClient) { }
  private readonly API_MOVIE = "http://localhost:8080/api/showTime";

  getAllShowTimeByMovieId(movieId:string){
    return this.httpClient.get<Array<ShowTime>>(this.API_MOVIE+"?MovieId="+movieId);
  }
}
