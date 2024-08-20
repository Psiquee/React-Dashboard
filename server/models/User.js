import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ // creamos un esquema, se lo pasamos a mongoose y mongoDB verifica que cada datos reales coincida con el formato
    name:{
        type: String, 
        require: true, //es obligatorio
        min: 2, //cantidad min de caracteres
        max: 100, //cantidad maxima
    },
    email:{
        type: String, 
        require: true, //es obligatorio
        max: 50, //cantidad max de caracteres
        unique: true //tiene que ser unico
    },
    password:{
        type: String,
        require: true, //obligatorio
        min: 5, //caracteres

    },
    city: String,
    state: String,
    country:  String,
    occupation: String,
    phoneNumber:String,
    transactions: Array,//matriz
    role: {
        type: String,
        enum: ["user", "admin", "superadmin"],
        default:"admin" //predeterminado
    },
},
{ timestamps: true }  //autom fecha creacion y fec actualizacion
);

const User = mongoose.model("User", UserSchema);
export default User;
