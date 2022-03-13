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
    content: string,
    openingDay: Date,
    endDay: Date,
    duration: Time,
    type: TypeMovie,
    actorList: Array<Actor>,
    directorList: Array<Director>,
    producerList: Array<Producer>,
    genreList: Array<Genre>
}
