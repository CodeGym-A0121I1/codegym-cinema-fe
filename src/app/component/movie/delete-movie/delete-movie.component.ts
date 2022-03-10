import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MovieService} from "../../../service/movie.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Movie} from "../../../model/movie/Movie";

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  constructor(
      private dialogRef:MatDialogRef<DeleteMovieComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private movieService: MovieService,
      private snackBar: MatSnackBar
  ) { }

  movie!: Movie;

  ngOnInit(): void {
    this.movie = this.data;
  }

  deleteConfirm(){
    this.movieService.deleteMovieById(this.movie.id).subscribe(() => {
      this.dialogRef.close();
      this.snackBar.open("Xóa phim thành công !!!", "OK", {
        duration : 4000
      })
    },() => {
      this.dialogRef.close();
      this.snackBar.open("Xóa phim thất bại !", "OK", {
        duration: 4000,
        panelClass: ['warning']
      })
    });
  }
}
