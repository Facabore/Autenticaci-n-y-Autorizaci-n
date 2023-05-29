import {Router} from 'express';
import * as productsCtrl from '../controllers/products.controller';

const router = Router();

router
    .post('/', productsCtrl.createProduct)
    .get('/',  productsCtrl.getProducts )
    .get('/:productId', productsCtrl.getProductById)
    .put('/:productId', productsCtrl.updateProductById) 
    .delete('/:productId', productsCtrl.deleteProductById) 

export default router;