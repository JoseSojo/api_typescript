import { Router } from 'express';
import { auth } from '../middlewares/auth';
import { GetTaskAllCtrl, GetTaskByIdCtrl, CreateNewTaskCtrl, UpdateTaskByIdCtrl, DeleteTaskByIdCtrl } from '../controllers/task.contoller';

const router = Router();

router.get('/', auth, GetTaskAllCtrl);
router.get('/:id', auth, GetTaskByIdCtrl);
router.post('/', auth, CreateNewTaskCtrl);
router.put('/:id', auth, UpdateTaskByIdCtrl);
router.delete('/:id', auth, DeleteTaskByIdCtrl);

export { router };
