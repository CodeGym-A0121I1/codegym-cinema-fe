import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieDTO} from "../dto/movie/MovieDTO";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly API_MOVIE: string = "http://localhost:8080/api/movie";
  constructor(private http: HttpClient) {
  }

  public createMovie(movie: MovieDTO): Observable<MovieDTO> {
    return this.http.post<MovieDTO>(`${this.API_MOVIE}/create`, movie );
  }
}
