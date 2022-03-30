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


    constructor(
        private router: Router,
        private movieService: MovieService,
        private angularFireStorage: AngularFireStorage,
        private matSnackBar: MatSnackBar,
        private route: ActivatedRoute,
    ) {
    }

    formEditMovie = new FormGroup({
        id: new FormControl('', [Validators.required]),
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
        showTimeList: new FormArray([], [Validators.required]),
        theaterList: new FormControl('', [Validators.required]),

    });

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

                                                this.movieService.findByIdMovie(this.route.snapshot.params["id"]).subscribe((data) => {
                                                    console.log(data)
                                                    setTimeout(() =>{
                                                        this.formEditMovie.setValue({
                                                        id: data.id,
                                                        name: data.name,
                                                        poster: data.poster,
                                                        trailer: data.trailer,
                                                        openingDay: data.openingDay,
                                                        endDay: data.endDay,
                                                        duration: data.duration,
                                                        content: data.content,
                                                        type: data.type,
                                                        genreList: data.genreList,
                                                        actorList: data.actorList,
                                                        // actorList: data.actorList.filter(actor => Number(actor['id'] === actor.id)),
                                                        directorList: data.directorList,
                                                        producerList: data.producerList,
                                                        showTimeList: data.showTimeList ?? null,
                                                        theaterList: data.theaterList ?? null,
                                                         });
                                                    }, );
                                                    this.url = this.formEditMovie.get('poster')!.value;
                                                    // this.formEditMovie.controls['actorList'].setValue(this.actorList)
                                                    // this.formEditMovie.updateValueAndValidity()
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
        // console.log(this.formEditMovie.value)
        if (!this.formEditMovie.invalid) {
            this.movieService.editMovie(this.formEditMovie.value).subscribe(
                () => {
                    this.router.navigateByUrl("list-movie").then(() => this.matSnackBar.open("Cập nhật phim thành công")._dismissAfter(3000))
                }
            );
        }
    }
    get genreList1() {
        return (<FormArray>this.formEditMovie.get('genreList')).controls;
    }
    addTime() {
        const time = new FormControl();
        (<FormArray>this.formEditMovie.get('showTimeList')).push(time);
    }

    get Time() {
        return (<FormArray>this.formEditMovie.get('showTimeList')).controls;
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
        const actorList = (this.formEditMovie.controls.actorList as FormArray);
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
        const directorList = (this.formEditMovie.controls.directorList as FormArray);
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
        const producerList = (this.formEditMovie.controls.producerList as FormArray);
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
