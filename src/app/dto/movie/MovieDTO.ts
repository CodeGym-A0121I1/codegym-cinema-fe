
import {Director} from "../../model/movie/Director";
import {ShowTimeDTO} from "./ShowTimeDTO";
import {TheaterDTO} from "./TheaterDTO";
import {Genre} from "../../model/movie/Genre";
import {Producer} from "../../model/movie/Producer";
import {Actor} from "../../model/movie/Actor";

export interface MovieDTO {
    id: string,
    name: string,
    poster: string,
    trailer: string,
    openingDay: Date,
    endDay: Date,
    duration: number,
    content: string,
    type: string,
    genreList :Array<Genre>,
    producerList:Array<Producer>
    actorList: Array<Actor>,
    directorList: Array<Director>,
    showTimeList: Array<ShowTimeDTO>,
    theaterList: Array<TheaterDTO>
}
