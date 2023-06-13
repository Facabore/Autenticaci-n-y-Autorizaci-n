import {Router} from 'express';
import * as productsCtrl from '../controllers/products.controller';
import {authJwt, verifySignUp} from '../middlewares';

const router = Router();

router
    .post('/', [authJwt.verifyToken, authJwt.isModerator] ,productsCtrl.createProduct)
    .get('/',  productsCtrl.getProducts )
    .get('/:productId', productsCtrl.getProductById)
    .put('/:productId', [authJwt.verifyToken, authJwt.isAdmin]  ,productsCtrl.updateProductById) 
    .delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin]  ,productsCtrl.deleteProductById) 

export default router;