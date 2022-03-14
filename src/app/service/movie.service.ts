import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieDTO} from "../dto/movie/MovieDTO";
import {Genre} from "../model/movie/Genre";
import {TheaterDTO} from "../dto/movie/TheaterDTO";
import {Actor} from "../model/movie/Actor";
import {Director} from "../model/movie/Director";
import {Producer} from "../model/movie/Producer";
import {ShowTimeDTO} from "../dto/movie/ShowTimeDTO";

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    readonly API_MOVIE: string = "http://localhost:8080/api/movie";

    constructor(private http: HttpClient) {
    }

    public createMovie(movie: MovieDTO): Observable<boolean> {
        return this.http.post<boolean>(`${this.API_MOVIE}/create`, movie);
    }

    public getAllGenre(): Observable<Genre[]> {
        return this.http.get<Genre[]>(`${this.API_MOVIE}/all/genre`);
    }

    public getAllActor(): Observable<Actor[]> {
        return this.http.get<Actor[]>(`${this.API_MOVIE}/all/actor`);
    }
    public getAllDirector(): Observable<Director[]> {
        return this.http.get<Director[]>(`${this.API_MOVIE}/all/director`);
    }
    public getAllProducer(): Observable<Producer[]> {
        return this.http.get<Producer[]>(`${this.API_MOVIE}/all/producer`);
    }

    public getAllTheaterDTO(): Observable<TheaterDTO[]> {
        return this.http.get<TheaterDTO[]>(`${this.API_MOVIE}/all/theater`);
    }

    public editMovie(movie : MovieDTO) :Observable<MovieDTO> {
        return this.http.put<MovieDTO>(`${this.API_MOVIE}/edit`+"/" + movie.id, movie);
    }

   public findByIdMovie(id : number): Observable<MovieDTO> {
        return this.http.get<MovieDTO>(this.API_MOVIE+ '/' + id);
    }

   public getAllShowTimeDTO() : Observable<ShowTimeDTO[]> {
       return this.http.get<ShowTimeDTO[]>(`${this.API_MOVIE}/all/showtime`);
    }
}
