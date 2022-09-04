const fetch =  require("node-fetch");
const Product = require("../models/products");

const getProducts = async (req, res) => {
// FIND ALL PRODUCTS
    try {
        let products = await Product.
        find({}).
        populate('provider', 'company_name').
        sort({'id':'desc'});
        res.status(200).json( {products});
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(404).json( {products});
    }
}



module.exports = {
    getProducts,
    //createProduct
    }