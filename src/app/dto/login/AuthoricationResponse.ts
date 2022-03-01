import {UserLoginDTO} from "./UserLoginDTO";

export interface AuthoricationResponse{
  jwt: string,
  user: UserLoginDTO,
  status: string
}
