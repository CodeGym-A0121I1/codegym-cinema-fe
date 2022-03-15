import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MovieService} from "../../../service/movie.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {CheckboxRequiredValidator, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
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
    showTimeListError :Boolean = false;

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
        // genreList: new FormArray([new FormControl('',Validators.required)]),
        genreList: new FormArray([], [Validators.required]),
        actorList: new FormArray([], [Validators.required]),
        directorList: new FormArray([], [Validators.required]),
        producerList: new FormArray([], [Validators.required]),
        showTimeList: new FormArray([]),
        theaterList: new FormControl('', [Validators.required]),
    });

    createMovie() {
        if (!this.formMovie.invalid) {
            this.formMovie.value.poster = this.url;
            console.log(this.formMovie.value);
            this.movieService.createMovie(this.formMovie.value).subscribe(
                (data) => {
                    if (data) {
                        this.matSnackBar.open("Thêm mới phim "  + " thành công", "Đóng", {
                            panelClass: ['mat-toolbar', 'mat-primary'],
                            duration: 5000
                        });
                        // this.router.navigateByUrl("");
                    }
                }
            );
            this.formMovie.reset();
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
            this.genreListError = this.genreList.length > 0 ? false : true;
        } else {
            {
                const index = genreList.controls
                    .findIndex(x => x.value === genre);
                genreList.removeAt(index);
            }
            this.genreListError = this.genreList.length < 0 ? false : true;
        }
    }

    onCheckboxChangeActor(event: MatOptionSelectionChange, actor: any) {
        const actorList = (this.formMovie.controls.actorList as FormArray);
        if (event.source.selected) {
            {
                actorList.push(new FormControl(actor));
            }
            this.actorListError = this.actorList.length > 0 ? false : true;

        } else {
            {
                const index = actorList.controls
                    .findIndex(x => x.value === actor);
                actorList.removeAt(index);

                this.actorListError = index < 0 ? false : true;
            }

        }
        console.log(this.actorListError)
        console.log(this.actorList.length)
    }


    onCheckboxChangeDirector(event: MatOptionSelectionChange, director: any) {
        const directorList = (this.formMovie.controls.directorList as FormArray);
        if (event.source.selected) {
            {
                directorList.push(new FormControl(director));
            }
            this.directorListError = this.directorList.length > 0 ? false : true;
        } else {
            {
                const index = directorList.controls
                    .findIndex(x => x.value === director);
                directorList.removeAt(index);
            }
            this.directorListError = this.directorList.length < 0 ? false : true;
        }
    }

    onCheckboxChangeProducer(event: MatOptionSelectionChange, producer: any) {
        const producerList = (this.formMovie.controls.producerList as FormArray);
        if (event.source.selected) {
            {
                producerList.push(new FormControl(producer));
            }
            this.producerListError = this.producerList.length > 0 ? false : true;
        } else {
            {
                const index = producerList.controls
                    .findIndex(x => x.value === producer);
                producerList.removeAt(index);
            }
            this.producerListError = this.producerList.length < 0 ? false : true;
        }
    }

    onCheckboxChangeTime(event: MatOptionSelectionChange, time: any) {
        const showTimeList = (this.formMovie.controls.showTimeList as FormArray);
        if (event.source.selected) {
            {
                showTimeList.push(new FormControl(time));
            }
            this.showTimeListError = this.showTimeDTOList.length > 0 ? false : true;
        } else {
            {
                const index = showTimeList.controls
                    .findIndex(x => x.value === time);
                showTimeList.removeAt(index);
            }
            this.showTimeListError = this.showTimeDTOList.length < 0 ? false : true;
        }
    }

    // addTime(element: HTMLInputElement) {
    //     const showTimeList = (this.formMovie.controls.showTimeList as FormArray);
    //     showTimeList.push(new FormControl(element.value));
    //     this.startTimeList = this.formMovie.value.startTimeList;
    // }


}
