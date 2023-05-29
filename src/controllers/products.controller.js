import productSchema from '../models/products';

export const createProduct = (req, res) => {
    // console.log('creating Product, is necessary name and price, but category and imgURL are optional');
    const product = productSchema(req.body);
    product.save()
    .then((data) => {
        res.status(201).json(data)
    })
    .catch((error) => {
        res.status(400).json({error: error.message})
    })
}

export const getProducts = (req, res) => {
    productSchema
    .find()
    .then((data) => {
        res.status(201).json(data);
    })
    .catch((error) => {
        res.status(400).json({error: error.message})
    })
}

export const getProductById = (req, res) => {
    
}

export const updateProductById = (req, res) => {
    
}

export const deleteProductById = (req, res) => {
    
}

