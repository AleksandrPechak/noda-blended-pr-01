import {  getAllProducts, createProduct,deleteProduct } from "../services/products.js";
import  createHttpError from "http-errors";

export const getProductsController = async (req, res, next) => { 
    const products = await getAllProducts(); 
    res.json({
        data: products,
    });   
};

export const createProductsController =  async(req, res, next) => {
    const product = await createProduct(req.body);
    res.status(201).json({
        data: product,
    });
};

export const deleteProductController = async(req, res, next) => {
    const{productId} = req.params;
    const product = await deleteProduct(productId);
    if (!product) {
        next(createHttpError(404, 'Not found'));
        return;
    }
    res.status(204);
};