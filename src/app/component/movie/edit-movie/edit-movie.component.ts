import {Component, OnInit} from '@angular/core';
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
import {MatOptionSelectionChange} from "@angular/material/core";
import {ShowTimeDTO} from "../../../dto/movie/ShowTimeDTO";

@Component({
    selector: 'app-edit-movie',
    templateUrl: './edit-movie.component.html',
    styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

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
    checkbox: any;

    constructor(
        private router: Router,
        private movieService: MovieService,
        private angularFireStorage: AngularFireStorage,
        private matSnackBar: MatSnackBar,
        private route: ActivatedRoute,
    ) {
    }

    formEditMovie = new FormGroup({
        name: new FormControl('', [Validators.required]),
        // poster: new FormControl('', [Validators.required]),
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
        // showTimeList: new FormArray([]),
        // theaterList: new FormControl('', [Validators.required]),

    });

    ngOnInit(): void {
        this.movieService.getAllGenre().subscribe(
            (data) => {
                this.genreList = data;
                // for (let i = 0; i < this.genreList.length; i++) {
                //     if (this.formEditMovie.controls.genreList)
                // }
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
                                                this.movieService.findByIdMovie(this.route.snapshot.params["id"]).subscribe((data) => {
                                                    this.formEditMovie.setValue({
                                                        // id: data.id,
                                                        name: data.name,
                                                        // poster: data.poster,
                                                        trailer: data.trailer,
                                                        openingDay: data.openingDay,
                                                        endDay: data.endDay,
                                                        duration: data.duration,
                                                        content: data.content,
                                                        type: data.type,
                                                        genreList: data.genreList,
                                                        actorList: data.actorList,
                                                        directorList: data.directorList,
                                                        producerList: data.producerList,
                                                        // showTimeList: data.showTimeList,
                                                        // theaterList: data.theaterList,
                                                    });
                                                    console.log(this.formEditMovie.controls.genreList.value);
                                                        for (let i = 0; i < this.formEditMovie.controls.genreList.value; i++){
                                                                    for (let j = 0; j < this.genreList; j++){
                                                                        if (this.genreList[j].id ==
                                                                            this.formEditMovie.controls.genreList.value[i].id ){
                                                                            this.checkbox.push(this.formEditMovie.controls.genreList.value[i].id)
                                                                        }
                                                            }
                                                        }
                                                        console.log(this.checkbox);
                                                        console.log(this.genreList);
                                                });
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

    editMovie() {
        // this.formEditMovie.value.poster = this.url;
        // console.log(this.formEditMovie.value);
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

    // checkActorListTouch() {
    //     let flag = false;
    //     const actorList = this.formMovie.controls.actorList as FormArray;
    //     if (actorList.touched) {
    //         console.log(actorList.touched)
    //         flag = false;
    //     }
    //     return flag;
    //
    // }

    onCheckboxChangeActor(event: MatOptionSelectionChange, actor: any) {
        const actorList = (this.formEditMovie.controls.actorList as FormArray);
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
            }
            this.actorListError = this.actorList.length < 0 ? false : true;
        }

        console.log(this.actorListError)
        console.log(actorList)
    }


    onCheckboxChangeDirector(event: MatOptionSelectionChange, director: any) {
        const directorList = (this.formEditMovie.controls.directorList as FormArray);
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
        const producerList = (this.formEditMovie.controls.producerList as FormArray);
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
        const showTimeList = (this.formEditMovie.controls.showTimeList as FormArray);
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

}
