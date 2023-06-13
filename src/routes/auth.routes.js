import {Router} from 'express';
import * as authCntrl from '../controllers/auth.controller';
import {verifySignUp} from '../middlewares';
import {validatorUser} from '../validators';

const router = Router();

router
    .post('/signup', [validatorUser.userValidator,verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.existRole], authCntrl.signUp)
    .post('/signin', authCntrl.signIn)

export default router;