import { Document, Types } from 'mongoose';

export interface VideoSchema extends Document {
  title: string;
  url: string;
}

export interface CommentSchema extends Document {
  username: string;
  comment: string;
  timestamp: Date;
  videoID: Types.ObjectId | undefined;
}

export interface ProductSchema extends Document {
  title: string;
  price: number;
  urlProduct: string;
  videoID: Types.ObjectId | undefined;
}
