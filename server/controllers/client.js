import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId:product._id
                });
                return {
                    ...product._doc,
                    stat,
                };
            })
        );
        res.status(200).json(productsWithStats);
    } catch (error) { //error de servidor
        res.status(404).json({ message: error.message });
    }
}

export const getCustomers = async(req, res) =>{
    try {
        const customers = await User.find({role: "user"}).select("-password"); //enviamos la informacion - el password
        res.status(200).json(customers);
  } catch (error) { //error de servidor
    res.status(404).json({ message: error.message });
  }
}