import {AccountLoginDTO} from "./AccountLoginDTO";

export interface UserLoginDTO{
    id: string,
    fullName: string,
    account: AccountLoginDTO
}
