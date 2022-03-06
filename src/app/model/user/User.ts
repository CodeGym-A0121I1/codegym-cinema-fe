import {EGender} from "./EGender";
import {Provider} from "./Provider";
import {Account} from "./Account";
import {Booking} from "../booking/Booking";

export interface User {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    dayOfBirth: Date;
    address: string;
    idCard: string;
    image: string;
    gender: EGender;
    provider: Provider;
    account: Account;
    bookingList: Array<Booking>;
}
