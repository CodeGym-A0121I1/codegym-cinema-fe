import {EGender} from "./EGender";
import {Booking} from "../booking/Booking";
// @ts-ignore
import {Provider} from "./Provider";
// @ts-ignore
import {Account} from "./Account";

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
