import Product from "../models/productModel.js";

export const getAllProduct = async (req, res) => {
   
    try {
        const Products = await Product.findAll();
        res.json(Products);
    } catch (error) {
         res.json({ message: error.message }); 
    }
};

export const getProductById = async (req, res) => {
   
    try {
        const Products = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(Products[0]);
    } catch (error) {
         res.json({ message: error.message }); 
    }
};

export const createProduct = async (req, res) => {
   
    try {
         await Product.create(req.body);
        res.json({
            message: "Product created successfully"
        });
    } catch (error) {
         res.json({ message: error.message }); 
    }
};


export const updateProduct = async (req, res) => {
   
    try {
         await Product.update(req.body,{
            where: {
                id: req.params.id
            }
         });
        res.json({
            message: "Product Updates successfully"
        });
    } catch (error) {
         res.json({ message: error.message }); 
    }
};

export const deleteProduct = async (req, res) => {
   
    try {
         await Product.destroy({
            where: {
                id: req.params.id
            }
         });
        res.json({
            message: "Product Deleted successfully"
        });
    } catch (error) {
         res.json({ message: error.message }); 
    }
};