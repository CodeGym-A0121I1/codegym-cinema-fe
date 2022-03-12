import {Theater} from "./Theater";
import {Ticket} from "../booking/Ticket";

export interface Seat {
  id: string;
  name: string;
  theater: Theater;
  ticketList: Array<Ticket>;
}
