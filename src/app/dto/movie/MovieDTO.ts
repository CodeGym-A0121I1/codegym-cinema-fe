import {ActorDTO} from "./ActorDTO";
import {DirectorDTO} from "./DirectorDTO";
import {ShowTimeDTO} from "./ShowTimeDTO";
import {TheaterDTO} from "./TheaterDTO";
import {Genre} from "../../model/movie/Genre";
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
    genreList :Array<Genre>,
    producerList:Array<ProducerDTO>
    actorList: Array<ActorDTO>,
    directorList: Array<DirectorDTO>,
    showTimeList: Array<ShowTimeDTO>,
    theaterList: Array<TheaterDTO>
}
