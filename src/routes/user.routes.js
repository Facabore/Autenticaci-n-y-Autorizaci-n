import { Router } from 'express';
import * as userCtrl from '../controllers/users.controller';

const router = Router();

router
.post('/', userCtrl.createUser)

export default router;