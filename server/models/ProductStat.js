import mongoose from "mongoose";

const  ProductStartSchema = new mongoose.Schema({ // creamos un esquema, se lo pasamos a mongoose y mongoDB verifica que cada datos reales coincida con el formato
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number, 
    year: Number,
    monthlyData: [
    {
        month: String,
        totalSales:Number,
        totalUnits: Number,
    }
    ], daylyData: {
        date: String,
        totalSales: Number,
        totalUnits: Number,
    }
}, 
{ timestamps: true}
);

const ProductStat = mongoose.model("ProductStat", ProductStartSchema );
export default ProductStat;
