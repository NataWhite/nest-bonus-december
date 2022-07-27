import {IsBoolean, IsEmail, IsEnum, IsNumber, IsOptional, IsString, Length} from "class-validator";

export class CreateUserDto {

    @IsString()
    @Length(2, 15)
    public username: string;

    @IsString()
    @IsEmail()
    public email: string;

    @IsNumber()
    public age: number;

    @IsBoolean()
    @IsOptional()
    public status: boolean;

    @IsString()
    @Length(2, 15)
    public password: string;
}