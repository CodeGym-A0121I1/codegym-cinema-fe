import {ETypeTheater} from "./ETypeTheater";
import {Seat} from "./Seat";
import {ShowTime} from "../booking/ShowTime";

export interface Theater {
    id: string;
    name: string;
    type: ETypeTheater;
    totalCol: number;
    totalRow: number;
    seatList: Seat;
    showTimeList: Array<ShowTime>;
}
