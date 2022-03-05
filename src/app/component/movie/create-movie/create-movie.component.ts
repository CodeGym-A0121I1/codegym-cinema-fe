import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MovieService} from "../../../service/movie.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {finalize} from "rxjs/operators";
import {Genre} from "../../../model/movie/Genre";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-create-movie',
    templateUrl: './create-movie.component.html',
    styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

    selectedFile: File | any;
    url: string = "";
    genreList: Genre[] | any;
    indexGenreList: number[] = [];

    constructor(
        private router: Router,
        private movieService: MovieService,
        private angularFireStorage: AngularFireStorage,
        private matSnackBar: MatSnackBar,
    ) {
    }


    ngOnInit(): void {
        this.movieService.getAllGenre().subscribe(
            (data) => {
                this.genreList = data;
                // console.log(data)
            }
        );
        // tiếp tục lấy list của các thằng còn lại....
    }

    formMovie = new FormGroup({
        name: new FormControl('', Validators.required,),
        poster: new FormControl(''),
        trailer: new FormControl('', [Validators.required]),
        openingDay: new FormControl('', Validators.required),
        endDay: new FormControl('', Validators.required),
        duration: new FormControl('', [Validators.required]),
        content: new FormControl('', [Validators.required]),
        type: new FormControl('', [Validators.required]),
        genreList: new FormArray([]),
        // actorList: new FormArray([
        //     new FormControl(),
        //     new FormControl()
        // ]),
        // directorList : new FormArray([
        //     new FormControl(),
        //     new FormControl()
        // ]),
        //   showTimeList:new FormArray([])
        //   ])


        // theaterList : new FormArray([
        //     new FormControl(),
        //     new FormControl()
    });


    createMovie() {
        this.formMovie.value.poster = this.url;
        // this.formMovie.value.genreList = this.genreListRequest;
        console.log(this.formMovie.value);
        // if (!this.formMovie.invalid) {
        // this.movieService.createMovie(this.formMovie.value).subscribe(
        //     (data) => {
        //         if (data) {
        //             this.matSnackBar.open("Thêm mới phim " + this.formMovie.value.name + " thành công", "Đóng", {
        //                 panelClass: ['mat-toolbar', 'mat-primary'],
        //                 duration: 5000
        //             });
        //             // this.router.navigateByUrl("");
        //         }
        //     }
        // );
    }

    // }


    // onAddSpecialRequest(genre: Genre, i: number) {
    //     this.indexGenreList.push(i);
    //     for (let j = 0; j < this.indexGenreList.length; j++) {
    //         if (i)
    //     }

    //     this.formMovie.value.genreList.push(new FormControl(genre).value);
    //
    // }
    //
    // onRemoveSpecialRequest(genre: Genre) {
    //     this.formMovie.value.genreList.removeAt();
    // }


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

}
