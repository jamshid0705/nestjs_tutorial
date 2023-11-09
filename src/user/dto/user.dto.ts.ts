import { IsEmail, IsEmpty, IsLowercase, IsNotEmpty, IsString, IsStrongPassword, Min, MinLength } from "class-validator";

export class UserDto {
    @IsString()
    name:string
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @IsLowercase()
    email:string
    @IsNotEmpty()
    @MinLength(8)
    @IsStrongPassword()
    password:string

}
