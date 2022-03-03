import {ActorDTO} from "./ActorDTO";
import {DirectorDTO} from "./DirectorDTO";
import {ShowTimeDTO} from "./ShowTimeDTO";
import {TheaterDTO} from "./TheaterDTO";
import {GenreDTO} from "./GenreDTO";
import {ProducerDTO} from "./ProducerDTO";

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
    genreList :Array<GenreDTO>,
    producerList:Array<ProducerDTO>
    actorList: Array<ActorDTO>,
    directorList: Array<DirectorDTO>,
    showTimeList: Array<ShowTimeDTO>,
    theaterList: Array<TheaterDTO>
}
