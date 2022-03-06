import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private httpClinet: HttpClient) {
  }

  readonly URL_API_DETAIL_MOVIE = "http://localhost:8080/api/movie"

  getById(idMovie: String): Observable<any> {
    return this.httpClinet.get(this.URL_API_DETAIL_MOVIE + '/' + idMovie);
  }
}
