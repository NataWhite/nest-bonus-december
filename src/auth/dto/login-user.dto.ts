import {IsEmail, IsString, Matches} from "class-validator";

export class LoginUserDto {

    @IsString()
    @IsEmail()
     email: string;

    @IsString()
    // @Matches()
     password: string;
}