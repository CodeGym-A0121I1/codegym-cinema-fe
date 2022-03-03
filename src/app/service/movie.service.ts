import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {MovieDTO} from "../model/DTO/MovieDTO";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    readonly API_MOVIE: string = "http://localhost:8080/api/movie";
    headers = new HttpHeaders({
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aGFuZyIsImV4cCI6MTY0NjY1MzM1NCwiaWF0IjoxNjQ2MjIxMzU0fQ.7dY3KL3dzfCgo3ue8FnlC1-p5n7QpaLFNRsJWwWoIgc"
    });

    constructor(private http: HttpClient) {
    }

    getAllMovie(): Observable<Array<MovieDTO>> {
        return this.http.get<Array<MovieDTO>>(this.API_MOVIE, {headers: this.headers});
    }

    public createMovie(movie: MovieDTO): Observable<MovieDTO> {
        return this.http.post<MovieDTO>(`${this.API_MOVIE}/create`, movie ,{headers: this.headers});
    }
}
