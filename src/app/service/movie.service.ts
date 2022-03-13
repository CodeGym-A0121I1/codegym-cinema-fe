import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {StatisticMovieDTO} from "../dto/statistic/StatisticMovieDTO";
import {Movie} from "../model/movie/Movie";
import {Genre} from "../model/movie/Genre";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  requestHeader = new HttpHeaders(
      {"No-Auth": "True"}
  );

  private readonly STATISTIC_MOVIE_API: string = "http://localhost:8080/api/statistic/movie";

  private readonly API_MOVIE = "http://localhost:8080/api" + "/movie";

  constructor(private http: HttpClient) {
  }

  public statisticTopMovieByGrossing(): Observable<StatisticMovieDTO[]> {
    return this.http.get<StatisticMovieDTO[]>(`${this.STATISTIC_MOVIE_API}`, {headers: this.requestHeader});
  }

  getAllMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.API_MOVIE, {headers: this.requestHeader});
  }

  getAllGenre(): Observable<Array<Genre>> {
    return this.http.get<Array<Genre>>(this.API_MOVIE + "/genre", {headers: this.requestHeader});
  }

  findAllByNameAndGenre(name: string, genre: number): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.API_MOVIE, {params: new HttpParams().set('name', name).set('genre', genre)})
  }

  getAll():Observable<any[]>{
    return this.http.get<any[]>(this.API_MOVIE + "/list")
  }

  deleteMovieById(id: string){
    return this.http.delete(this.API_MOVIE + "/delete/" + id)
  }

  getMovieById(id: String){
    return this.http.get(this.API_MOVIE + "/" + id)
  }
    readonly URL_API_DETAIL_MOVIE = "http://localhost:8080/api/movie"

    getById(idMovie: string): Observable<any> {
        return this.http.get(this.URL_API_DETAIL_MOVIE + '/' + idMovie, {headers: this.requestHeader});
    }
}
