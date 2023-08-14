import { Schema, model, Types } from 'mongoose';
import { ProductSchema } from '../types/models';

const productSchema = new Schema<ProductSchema>({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  urlProduct: {
    type: String,
    required: true
  },
  videoID: {
    type: Types.ObjectId,
    ref: 'Video'
  }
});

productSchema.set('toJSON', {
  transform: function (document, returnedObject) {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Product = model<ProductSchema>('Product', productSchema);

export default Product;
