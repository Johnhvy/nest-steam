/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateItem {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNotEmpty()
  price: number;
}
