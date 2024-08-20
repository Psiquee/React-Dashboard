import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managentRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

/*data imports*/
//  import User from "./models/User.js";
 
//import Product from "./models/Product.js";
//import ProductStat from "./models/ProductStat.js";
//import { dataProduct, dataProductStat } from "./data/index.js";

/*Configuration */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managentRoutes);
app.use("/sales", salesRoutes);

/*Mongoose */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    /*inset data una sola vez */
    //User.insertMany(dataUser);
    //Product.insertMany(dataProduct);
    //ProductStat.insertMany(dataProductStat);
  })
  .catch((error) => console.log(`${error} did not connect`));
