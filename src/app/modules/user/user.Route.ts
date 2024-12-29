import express from 'express';
import { UserCotrollers } from './user.Controller';
const router = express.Router();
//will call controller func

router.post('/', UserCotrollers.createStudent);

export const UserserRoutes = router;
