import {Time} from "@angular/common";
import {TypeMovie} from "./TypeMovie";
import {Actor} from "./Actor";
import {Director} from "./Director";
import {Producer} from "./Producer";
import {Genre} from "./Genre";

export interface Movie {
    id: string,
    name: string,
    poster: string,
    trailer: string,
    introduction: string,
    openingDay: Date,
    endDay: Date,
    duration: Time,
    type: TypeMovie,
    actorList: Array<Actor>,
    director: Director,
    producer: Producer,
    genreList: Array<Genre>
}
