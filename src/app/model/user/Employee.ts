import {Account} from "./Account";

export interface Employee{
    id:string,
    fullName:string,
    email: string;
    phoneNumber: string;
    gender: string;
    dayOfBirth: Date;
    address: string;
    idCard: string;
    image: string;
    provider: string;
    account: Account;
}
