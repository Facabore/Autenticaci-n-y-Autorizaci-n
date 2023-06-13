import productSchema from '../models/products';

export const createProduct = async (req, res) => {
    const product = productSchema(req.body);
    await product.save()
    .then((data) => {
        res.status(201).json(data)
    })
    .catch((error) => {
        res.status(400).json({error: error.message})
    })
}

export const getProducts = async (req, res) => {
    await productSchema
    .find()
    .then((data) => {
        res.status(201).json(data);
    })
    .catch((error) => {
        res.status(400).json({error: error.message})
    })
}

export const getProductById = async (req, res) => {
    const {productId} = req.params;
    await productSchema
    .findById(productId)
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((error) => {
        res.status(400).json({error: error.message})
    })
    
}

export const updateProductById = async (req, res) => {
    const {productId} = req.params;
    const { name, category, price, imgURL } = req.body;
    await productSchema
    .updateOne( {_id: productId}, {$set: {name, category, price, imgURL}})
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((error) => {
        res.status(400).json({error: error.message})
    })
    
}

export const deleteProductById = async (req, res) => {
    const { productId } = req.params;
    await productSchema
    .findByIdAndDelete ( productId )
    .then((data) => {
        res.status(204).json(data);
    })
    .catch((error) => {
        res.status(400).json({error: error.message})
    })
}

