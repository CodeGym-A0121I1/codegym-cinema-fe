import {Actor} from "./Actor";
import {Director} from "./Director";
// @ts-ignore
import {Producer} from "./Producer";


export interface Movie {
    id: string,
    name: string,
    poster:string,
    introduction:string;
    openingDay:Date;
    endDay:Date;
    duration:string;
    type:string,
    content:string,
    actor:Actor;
    director:Director;
    producer:Producer
}
