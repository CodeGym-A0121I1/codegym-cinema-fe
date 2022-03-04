import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShowTime} from "../model/booking/ShowTime";
import {Seat} from "../model/Seat";

@Injectable({
  providedIn: 'root'
})
export class ShowTimeService {

  constructor(private httpClient:HttpClient) { }
  private readonly API_MOVIE = "http://localhost:8080/api/seats/showTime";
  private readonly API_SEAT_BOOKED = "http://localhost:8080/api/seats/booked";

  getAllShowTimeByMovieId(movieId:string){
    return this.httpClient.get<Array<ShowTime>>(this.API_MOVIE+"?MovieId="+movieId);
  }

  getAllSeatBookedByTheaterId(theaterId:string){
    return this.httpClient.get<Array<Seat>>(this.API_SEAT_BOOKED+"?theaterId="+theaterId);
  }
}
