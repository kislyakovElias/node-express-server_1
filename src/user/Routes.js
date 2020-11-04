import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';
import userDeleteById from './userDeleteById';
import userDeleteAll from './userDeleteAll';

const router = Router();

router.post('/', userRegister); // POST localhost:5000/user/
router.get('/', userGetAll); // GET localhost:5000/user/
router.get('/:userId', userGetById); // GET by Id localhost:5000/user/5fa2560a1570cd953816a9dc
router.patch('/:userId', userUpdateById); // PATCH by Id localhost:5000/user/5fa2560a1570cd953816a9dc
router.delete('/:userId', userDeleteById); // Delete by Id localhost:5000/user/5fa2560a1570cd953816a9dc
router.delete('/', userDeleteAll); // Delete localhost:5000/user/

export default router;
