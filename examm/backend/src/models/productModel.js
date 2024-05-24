import mongoose from 'mongoose';
 
const { Schema } = mongoose;

const productsSchema = new Schema({
  name: String,
  price: Number,
  title: String,
  img: String,


});


  export const ProductsModel = mongoose.model('ProductsModel', productsSchema);