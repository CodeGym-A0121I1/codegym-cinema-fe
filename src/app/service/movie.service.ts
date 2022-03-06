import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    constructor(private httpClinet: HttpClient) {
    }

    requestHeader = new HttpHeaders(
        {"No-Auth": "True"}
    );

    readonly URL_API_DETAIL_MOVIE = "http://localhost:8080/api/movie"

    getById(idMovie: string): Observable<any> {
        return this.httpClinet.get(this.URL_API_DETAIL_MOVIE + '/' + idMovie, {headers: this.requestHeader});
    }
}
