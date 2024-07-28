/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  readonly userId: string;

  @IsNotEmpty()
  readonly password: string;
}
