/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Document & Item;

//item schema
@Schema()
export class Item {
    @Prop({ required: true, unique: true })
    name: string;
  
    @Prop({ required: true })
    price: number;
}
export const ItemSchema = SchemaFactory.createForClass(Item);