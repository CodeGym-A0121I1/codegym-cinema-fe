import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StatisticMovieDTO} from "../dto/statistic/StatisticMovieDTO";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly STATISTIC_MOVIE_API: string = "http://localhost:8080/api/statistic/movie";

  constructor(private http: HttpClient) { }

  public statisticTopMovieByGrossing(): Observable<StatisticMovieDTO[]> {
    console.log(this.http.get<StatisticMovieDTO[]>(`${this.STATISTIC_MOVIE_API}`));
    return this.http.get<StatisticMovieDTO[]>(`${this.STATISTIC_MOVIE_API}`);
  }
}
