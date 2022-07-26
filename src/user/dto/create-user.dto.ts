export class CreateUserDto {

    public userName: string;
    public email: string;
    public age: number;
    public status: boolean;
    private password: string;
}