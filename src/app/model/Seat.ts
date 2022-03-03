import {Theater} from "./movie/Theater";

export interface Seat {
    id: string,
    name: string,
    theater:Theater
}