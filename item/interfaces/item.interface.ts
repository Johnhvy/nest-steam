/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export class Item extends Document {
    readonly title: string;
    readonly price: number;
}