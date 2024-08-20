import User from "../models/User.js";

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id); // Buscamos el usuario por id y lo guardamos en la constante
        
        res.status(200).json(user);
    } catch (error) { //error de servidor
        res.status(404).json({ message: error.message });
    }
}
