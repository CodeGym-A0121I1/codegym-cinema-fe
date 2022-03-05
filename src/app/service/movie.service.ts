import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieDTO} from "../dto/movie/MovieDTO";
import {Genre} from "../model/movie/Genre";

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
        return this.http.get<Genre[]>(`${this.API_MOVIE}/all-genre`);
    }
}
