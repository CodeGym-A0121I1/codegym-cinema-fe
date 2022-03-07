import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Movie} from "../model/movie/Movie";
import {Genre} from "../model/movie/Genre";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly API_MOVIE = environment.apiBaseUrl + "/movie";

  constructor(
      private http: HttpClient
  ) {
  }

  getAllMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.API_MOVIE);
  }

  getAllGenre(): Observable<Array<Genre>> {
    return this.http.get<Array<Genre>>(this.API_MOVIE + "/genre");
  }

  findAllByNameAndGenre(name: string, genre: number): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.API_MOVIE, {params: new HttpParams().set('name', name).set('genre', genre)})
  }
}
