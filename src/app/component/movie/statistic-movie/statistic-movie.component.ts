import { Component, OnInit } from '@angular/core';
import {StatisticMovieDTO} from "../../../dto/statistic/StatisticMovieDTO";
import {MovieService} from "../../../service/movie.service";

@Component({
  selector: 'app-statistic-movie',
  templateUrl: './statistic-movie.component.html',
  styleUrls: ['./statistic-movie.component.css']
})

export class StatisticMovieComponent implements OnInit {
  topListMovie: StatisticMovieDTO[];
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: any;

  constructor(private statisticMovieService: MovieService) {

  }

  ngOnInit(): void {
    this.statisticMovieService.statisticTopMovieByGrossing().subscribe((result: StatisticMovieDTO[]) => {
      this.topListMovie = result;
      this.totalPages = result.length;
      console.log(result);
    })
  }

}
