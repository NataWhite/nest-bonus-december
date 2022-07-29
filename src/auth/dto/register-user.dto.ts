import {IsBoolean, IsEmail, IsNumber, IsOptional, IsString, Length} from "class-validator";

export class RegisterUserDto {
    @IsString()
    @Length(2, 15)
    public username: string;

    @IsString()
    @IsEmail()
    public email: string;

    @IsString()
    @Length(2, 15)
    public password: string;

    @IsNumber()
    @IsOptional()
    public age: number;
}