import { Component, OnInit } from '@angular/core';
import {Genre} from "../../../model/movie/Genre";
import {TheaterDTO} from "../../../dto/movie/TheaterDTO";
import {Actor} from "../../../model/movie/Actor";
import {Producer} from "../../../model/movie/Producer";
import {Director} from "../../../model/movie/Director";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../../service/movie.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  selectedFile: File | any;
  url: string = "";
  genreList: Genre[] | any;
  theaterDTOList: TheaterDTO[] | any;
  startTimeList: any;
  actorList: Actor[] | any;
  producerList: Producer[] | any;
  directorList: Director[] | any;

  constructor(
      private router: Router,
      private movieService: MovieService,
      private angularFireStorage: AngularFireStorage,
      private matSnackBar: MatSnackBar,
      private route :ActivatedRoute,
  ) {
  }


  ngOnInit(): void {
      this.movieService.findByIdMovie(this.route.snapshot.params["id"]).subscribe(data => {
          console.log(data);
          this.formEditMovie.setValue({
              name :data.name,
              // poster: data.poster,
              // trailer: data.trailer,
              // openingDay: data.openingDay,
              // endDay: data.endDay,
              // duration: data.duration,
              // content: data.content,
              // type:data.type,
              // genreList:data.genreList,
              // actorList:data.actorList,
              // directorList:data.directorList,
              // producerList:data.producerList,
              // showTimeList: new FormArray([]),
              // theaterList: data.theaterList,
          } );
      })
    this.movieService.getAllGenre().subscribe(
        (data) => {
          this.genreList = data;
          // this.movieService.getAllTheaterDTO().subscribe(
          //     (data) => {
          //       this.theaterDTOList = data;
                this.movieService.getAllActor().subscribe(
                    (data) => {
                      this.actorList = data;
                      this.movieService.getAllDirector().subscribe(
                          (data) => {
                            this.directorList = data;
                            this.movieService.getAllProducer().subscribe(
                                (data) => {
                                  this.producerList = data;
                                }
                            );
                          }
                      );
                    }
                );
              }
          // );
        // }
    );
  }


  formEditMovie = new FormGroup({
    name: new FormControl('', Validators.required),
    poster: new FormControl(''),
    trailer: new FormControl('', [Validators.required]),
    openingDay: new FormControl('', Validators.required),
    endDay: new FormControl('', Validators.required),
    duration: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    // genreList: new FormArray([]),
    // actorList: new FormArray([]),
    // directorList : new FormArray([]),
    // producerList : new FormArray([]),
    // // showTimeList: new FormArray([]),
    // theaterList: new FormControl(),

  });


 editMovie() {
    this.formEditMovie.value.poster = this.url;
    console.log(this.formEditMovie.value);
    this.movieService.editMovie(this.formEditMovie.value).subscribe(
        () => {
          this.router.navigateByUrl("movie").then(() => this.matSnackBar.open("Edit successful")._dismissAfter(3000))

        }
    );
  }

  selectFile(event: any) {
    const path = new Date().toString();
    this.selectedFile = event.target.files[0];
    this.angularFireStorage.upload(path, this.selectedFile).snapshotChanges().pipe(
        finalize(() => {
          this.angularFireStorage.ref(path).getDownloadURL().subscribe(
              (data) => {
                this.url = data;
              }
          )
        })
    ).subscribe();
  }

  onCheckboxChangeGenre(event: any, genre: any) {
    const genreList = (this.formEditMovie.controls.genreList as FormArray);
    if (event.target.checked) {
      genreList.push(new FormControl(genre));
    } else {
      const index = genreList.controls
          .findIndex(x => x.value === genre);
      genreList.removeAt(index);
    }
  }

  onCheckboxChangeActor(event: any, actor: any) {
    const actorList = (this.formEditMovie.controls.actorList as FormArray);
    if (event.target.checked) {
      actorList.push(new FormControl(actor));
    } else {
      const index = actorList.controls
          .findIndex(x => x.value === actor);
      actorList.removeAt(index);
    }
  }
  onCheckboxChangeDirector(event: any, director: any) {
    const directorList = (this.formEditMovie.controls.directorList as FormArray);
    if (event.target.checked) {
      directorList.push(new FormControl(director));
    } else {
      const index = directorList.controls
          .findIndex(x => x.value === director);
      directorList.removeAt(index);
    }
  }
  onCheckboxChangeProducer(event: any, producer: any) {
    const producerList = (this.formEditMovie.controls.producerList as FormArray);
    if (event.target.checked) {
      producerList.push(new FormControl(producer));
    } else {
      const index = producerList.controls
          .findIndex(x => x.value === producer);
      producerList.removeAt(index);
    }
  }

}
