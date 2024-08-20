import mongoose from "mongoose";

const  ProductSchema = new mongoose.Schema({ // creamos un esquema, se lo pasamos a mongoose y mongoDB verifica que cada datos reales coincida con el formato
    name: String,
    price: Number, 
    description: String,
    category: String,
    rating: Number,
    supply: Number, 
}, 
{ timestamps: true}
);

const Product = mongoose.model("Product", ProductSchema );
export default Product;
