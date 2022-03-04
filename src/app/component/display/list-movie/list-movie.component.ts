import {Component, OnInit} from '@angular/core';
import {Movie} from "../../../model/movie/Movie";
import {MovieService} from "../../../service/movie.service";


@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  movieList: Array<Movie> = [];

  constructor(
      private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(
        data => this.movieList = data
    )
  }
}
