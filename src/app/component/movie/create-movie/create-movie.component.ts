import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MovieService} from "../../../service/movie.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {finalize} from "rxjs/operators";
import {Genre} from "../../../model/movie/Genre";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TheaterDTO} from "../../../dto/movie/TheaterDTO";
import {Actor} from "../../../model/movie/Actor";
import {Director} from "../../../model/movie/Director";
import {Producer} from "../../../model/movie/Producer";
import {MatOptionSelectionChange} from "@angular/material/core";
import {ShowTimeDTO} from "../../../dto/movie/ShowTimeDTO";


@Component({
    selector: 'app-create-movie',
    templateUrl: './create-movie.component.html',
    styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

    selectedFile: File | any;
    url: string = "";
    genreList: Genre[] | any;
    genreListError: Boolean = false;
    theaterDTOList: TheaterDTO[] | any;
    actorList: Actor[] | any;
    actorListError: Boolean = false;
    producerList: Producer[] | any;
    producerListError: Boolean = false;
    directorList: Director[] | any;
    directorListError: Boolean = false;
    showTimeDTOList: ShowTimeDTO[] | any;

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
                this.movieService.getAllTheaterDTO().subscribe(
                    (data) => {
                        this.theaterDTOList = data;
                        this.movieService.getAllActor().subscribe(
                            (data) => {
                                this.actorList = data;
                                this.movieService.getAllDirector().subscribe(
                                    (data) => {
                                        this.directorList = data;
                                        this.movieService.getAllProducer().subscribe(
                                            (data) => {
                                                this.producerList = data;
                                                this.movieService.getAllShowTimeDTO().subscribe(
                                                    (data) => {
                                                        this.showTimeDTOList = data;

                                                    }
                                                )
                                            }
                                        );
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    }


    formMovie = new FormGroup({
        name: new FormControl('', [Validators.required]),
        poster: new FormControl('', [Validators.required]),
        trailer: new FormControl('', [Validators.required]),
        openingDay: new FormControl('', [Validators.required]),
        endDay: new FormControl('', [Validators.required]),
        duration: new FormControl('', [Validators.required]),
        content: new FormControl('', [Validators.required]),
        type: new FormControl('', [Validators.required]),
        genreList: new FormArray([], [Validators.required]),
        actorList: new FormArray([], [Validators.required]),
        directorList: new FormArray([], [Validators.required]),
        producerList: new FormArray([], [Validators.required]),
        showTimeList: new FormArray([]),
        theaterList: new FormControl('', [Validators.required]),
    });

    createMovie() {
        for (let i = 0; i < this.formMovie.value.showTimeList.length; i++) {
            let showTime = {
                startTime: null
            };
            showTime.startTime = this.formMovie.value.showTimeList[i];
            this.formMovie.value.showTimeList[i] = showTime;
        }
        console.log(this.formMovie.value);
        if (!this.formMovie.invalid) {
            this.formMovie.value.poster = this.url;
            this.movieService.createMovie(this.formMovie.value).subscribe(
                (data) => {

                    this.matSnackBar.open("Thêm mới phim " + " thành công", "Đóng", {
                        panelClass: ['mat-toolbar', 'mat-primary'],
                        duration: 5000
                    });
                },
            );
            this.ngOnInit();
            this.formMovie.reset();
            this.url="";
        }
    }

    addTime() {
        const time = new FormControl();
        (<FormArray>this.formMovie.get('showTimeList')).push(time);
    }

    get Time() {
        return (<FormArray>this.formMovie.get('showTimeList')).controls;
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
        const genreList = (this.formMovie.controls.genreList as FormArray);
        if (event.checked) {
            {
                genreList.push(new FormControl(genre));
            }
            this.genreListError = genreList.value.length > 0 ? false : true;
        } else {
            {
                const index = genreList.controls
                    .findIndex(x => x.value === genre);
                genreList.removeAt(index);
            }
            this.genreListError = genreList.value.length == 0 ? true : false;
        }
    }

    onCheckboxChangeActor(event: MatOptionSelectionChange, actor: any) {
        const actorList = (this.formMovie.controls.actorList as FormArray);
        if (event.source.selected) {
            {
                actorList.push(new FormControl(actor));
            }
            this.actorListError = actorList.value.length > 0 ? false : true;

        } else {
            {
                const index = actorList.controls
                    .findIndex(x => x.value === actor);
                actorList.removeAt(index);
            }
            this.actorListError = actorList.value.length == 0 ? true : false;
        }
    }

    onCheckboxChangeDirector(event: MatOptionSelectionChange, director: any) {
        const directorList = (this.formMovie.controls.directorList as FormArray);
        if (event.source.selected) {
            {
                directorList.push(new FormControl(director));
            }
            this.directorListError = directorList.value.length > 0 ? false : true;
        } else {
            {
                const index = directorList.controls
                    .findIndex(x => x.value === director);
                directorList.removeAt(index);
            }
            this.directorListError = directorList.value.length == 0 ? true : false;
        }
    }

    onCheckboxChangeProducer(event: MatOptionSelectionChange, producer: any) {
        const producerList = (this.formMovie.controls.producerList as FormArray);
        if (event.source.selected) {
            {
                producerList.push(new FormControl(producer));
            }
            this.producerListError = producerList.value.length > 0 ? false : true;
        } else {
            {
                const index = producerList.controls
                    .findIndex(x => x.value === producer);
                producerList.removeAt(index);
            }
            this.producerListError = producerList.value.length == 0 ? true : false;
        }
    }
}
