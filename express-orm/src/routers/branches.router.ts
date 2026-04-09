import { Router } from 'express';
import { branchesController } from '../controllers/branches.controller';

const branchesRouter = Router();

branchesRouter.get('/', branchesController?.getAll);
branchesRouter.post('/', branchesController?.create);

export default branchesRouter;