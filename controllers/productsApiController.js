const Product = require("../models/products");


const getProducts = async (req, res) => {
// FIND ALL PRODUCTS
    try {
        let products = await Product.find({}, '-_id')
        .populate('provider', 'company_name')
        .sort({'id':'asc'});
        res.status(200).json( {products});
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(404).json( {products});
    }
}




const createProduct = async (req, res) => {
    console.log("Esto es el consol.log de lo que introducimos por postman",req.body); // Objeto recibido de producto nuevo
    const product = req.body; // {} nuevo producto a guardar

    // Líneas para guardar en una BBDD SQL o MongoDB
try{
    let product = new Product(req.body); // Crear el objeto producto con los nuevos datos del producto
    let answer = await product.save(); // Guardar objeto en MongoDB
    console.log("Este es el console.log de lo que devuelve la api ",answer);
    res.status(201).json({"message":` Producto creado ${answer.title} ${answer.id}`});

}catch(error){
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({"message":` Error guardando producto ${answer.title}`});
}
}



module.exports = {
getProducts,
createProduct
}
