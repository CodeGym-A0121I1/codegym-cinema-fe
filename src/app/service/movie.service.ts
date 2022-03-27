import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {StatisticMovieDTO} from "../dto/statistic/StatisticMovieDTO";
import {Movie} from "../model/movie/Movie";
import {Genre} from "../model/movie/Genre";
import {MovieDTO} from "../dto/movie/MovieDTO";
import {Actor} from "../model/movie/Actor";
import {Director} from "../model/movie/Director";
import {Producer} from "../model/movie/Producer";
import {TheaterDTO} from "../dto/movie/TheaterDTO";
import {ShowTimeDTO} from "../dto/movie/ShowTimeDTO";


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
    return this.http.get<StatisticMovieDTO[]>(`${this.STATISTIC_MOVIE_API}`);
  }

  getAllMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.API_MOVIE, {headers: this.requestHeader});
  }

  getAllGenre(): Observable<Array<Genre>> {
    return this.http.get<Array<Genre>>(this.API_MOVIE + "/genre", {headers: this.requestHeader});
  }

  findAllByNameAndGenre(name: string, genre: number): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.API_MOVIE, {
      params: new HttpParams().set('name', name).set('genre', genre),
      headers: this.requestHeader
    })
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

  public createMovie(movie: MovieDTO): Observable<boolean> {
    return this.http.post<boolean>(`${this.API_MOVIE}`, movie);
  }

  // public getAllGenre(): Observable<Genre[]> {
  //   return this.http.get<Genre[]>(`${this.API_MOVIE}/genre`);
  // }

  public getAllActor(): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${this.API_MOVIE}/actor`);
  }
  public getAllDirector(): Observable<Director[]> {
    return this.http.get<Director[]>(`${this.API_MOVIE}/director`);
  }
  public getAllProducer(): Observable<Producer[]> {
    return this.http.get<Producer[]>(`${this.API_MOVIE}/producer`);
  }

  public getAllTheaterDTO(): Observable<TheaterDTO[]> {
    return this.http.get<TheaterDTO[]>(`${this.API_MOVIE}/theater`);
  }

  public editMovie(movie : MovieDTO) :Observable<MovieDTO> {
    return this.http.put<MovieDTO>(`${this.API_MOVIE}`, movie);
  }

  public findByIdMovie(id : number): Observable<MovieDTO> {
    return this.http.get<MovieDTO>(this.API_MOVIE+ '/' + id);
  }

  public getAllShowTimeDTO() : Observable<ShowTimeDTO[]> {
    return this.http.get<ShowTimeDTO[]>(`${this.API_MOVIE}/showtime`);
  }
}
