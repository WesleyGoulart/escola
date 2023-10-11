import { Router } from 'express';
import professorController from '../controllers/ProfessorController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', professorController.index);
router.post('/', loginRequired, professorController.store);
router.put('/:id', loginRequired, professorController.update);
router.get('/:id', professorController.show);
router.delete('/:id', loginRequired, professorController.delete);

export default router;
