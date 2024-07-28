/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Item } from 'src/item/schemas/item.schema';

export type TaskDocument = HydratedDocument<User>;

//user schema
@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true, lowercase: true })
  userId: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }] })
  items: Item[];

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);
