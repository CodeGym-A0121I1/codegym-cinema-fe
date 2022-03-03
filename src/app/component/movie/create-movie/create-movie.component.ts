import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MovieService} from "../../../service/movie.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  url: string | any;
  selectedFile: File | any;


  constructor(
      private router: Router,
      private movieService: MovieService,
      // private angularFireStorage: AngularFireStorage
  ) {
  }

  // movieList: any

  ngOnInit(): void {

  }
  // formMovie = new FormGroup({
  //   name: new FormControl('', Validators.required,),
  //   poster: new FormControl(''),
  //   trailer: new FormControl('', [Validators.required]),
  //   openingDay: new FormControl('', Validators.required),
  //   endDay: new FormControl('', Validators.required),
  //   duration: new FormControl('', [Validators.required]),
  //   content: new FormControl('', [Validators.required]),
  //   type: new FormControl('', [Validators.required]),
    // genreList: new FormControl('', [Validators.required]),
    // actorList: new FormArray([
    //     new FormControl(),
    //     new FormControl()
    // ]),
    // directorList : new FormArray([
    //     new FormControl(),
    //     new FormControl()
    // ]),
    // showTimeList : new FormArray([
    //     new FormControl(),
    //     new FormControl()
    // ]),
    // theaterList : new FormArray([
    //     new FormControl(),
    //     new FormControl()
    // ]),

  // })

  // createMovie() {
  //   console.log(this.formMovie.value)
  //   // if (!this.formMovie.invalid) {
  //   this.movieService.createMovie(this.formMovie.value).subscribe((data) => {
  //     console.log(data)
  //     // this.router.navigateByUrl("");
  //   });
  // }
  //
  // // }
  //
  // selectFile(event: any) {
  //   const path = new Date().toString();
  //   this.selectedFile = event.target.files[0]
  //   console.log(this.selectedFile)
  //   this.angularFireStorage.upload(path, this.selectedFile)
  //       .snapshotChanges().pipe(
  //       finalize(() => {
  //         this.angularFireStorage.ref(path).getDownloadURL().subscribe(
  //             (data) => {
  //               this.url = data;
  //               console.log(this.url)
  //             }
  //         )
  //       })
  //   ).subscribe();
  // }


}
