import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';

const router = Router();

router.post('/', userRegister); // POST localhost:5000/user/
router.get('/', userGetAll); // GET localhost:5000/user/
router.get('/:userId', userGetById); // GET by Id localhost:5000/user/5fa2560a1570cd953816a9dc

export default router;
