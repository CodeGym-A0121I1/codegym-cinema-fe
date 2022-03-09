import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StatisticMovieDTO} from "../dto/statistic/StatisticMovieDTO";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  headers = new HttpHeaders(({
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsZWhvYW5nbG9uZyIsImV4cCI6MTY0NjgxNzQ4MiwiaWF0IjoxNjQ2Mzg1NDgyfQ.wgNJAi4ILFKoacgIlaoDvifZOx6oYZVgeSqa_wBtwXk"
  }))
  private readonly STATISTIC_MOVIE_API: string = "http://localhost:8080/api/statistic/movie";

  constructor(private http: HttpClient) { }

  public statisticTopMovieByGrossing(): Observable<StatisticMovieDTO[]> {
    return this.http.get<StatisticMovieDTO[]>(`${this.STATISTIC_MOVIE_API}`, {headers: this.headers});
  }
}
