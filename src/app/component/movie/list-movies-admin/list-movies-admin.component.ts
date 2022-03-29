import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../../service/movie.service";
import {Movie} from "../../../model/movie/Movie";
import {Director} from "../../../model/movie/Director";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DeleteMovieComponent} from "../delete-movie/delete-movie.component";

@Component({
  selector: 'app-list-movies-admin',
  templateUrl: './list-movies-admin.component.html',
  styleUrls: ['./list-movies-admin.component.css']
})
export class ListMoviesAdminComponent implements OnInit {

  movieList: Movie[] | any;
  checkPagination = true;
  p: number| any;

  constructor(private movieService: MovieService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.movieService.getAll().subscribe(
        (data:any) => {
          this.movieList = data;
          if (data.length < 5){
            this.checkPagination = false;
          }
        }
    )
  }

  convertDirector(diretorList: Array<Director>){
    let str:string='';
    for (const director of diretorList) {
      str+=', ' +director.name;
      var cstr = str.slice(1);
    }
    // @ts-ignore
    return cstr;
  }

  openDialogDelete(movie: Movie){
    this.movieService.getMovieById(movie.id).subscribe(data => {
      const dialogRef = this.matDialog.open(DeleteMovieComponent, {
        width: '500px',
        height: '215px',
        data: data
      });
      dialogRef.afterClosed().subscribe(() => {
        this.ngOnInit();
      })
    })
  }

}
