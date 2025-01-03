import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();
//will call controller func
router.get('/', StudentControllers.getAllStudent);
router.get('/:studentId', StudentControllers.getSingleStudent);
router.delete('/:studentId', StudentControllers.deletedStudent);
export const StudentRoutes = router;
