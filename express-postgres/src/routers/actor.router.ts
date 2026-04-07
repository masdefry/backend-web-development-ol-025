import { Router } from 'express';
import { actorController } from '../controllers/actor.controller';

const actorRouter = Router();

actorRouter.get('/', actorController?.getAll);
actorRouter.post('/', actorController?.create);
actorRouter.put('/:id', actorController?.update);

export default actorRouter;
