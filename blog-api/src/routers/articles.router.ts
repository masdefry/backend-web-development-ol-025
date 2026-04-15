import { Router } from 'express';
import { articlesController } from '../controllers/articles.controller';

const articlesRouter = Router();

articlesRouter.post('/', articlesController?.create);
articlesRouter.get('/', articlesController?.getAll);
articlesRouter.get('/:slug', articlesController?.getDetail);
articlesRouter.put('/:slug', articlesController?.update);
articlesRouter.delete('/:slug', articlesController?.delete);

export default articlesRouter;



/*
    URL
        QUERY
        PARAMS
    
    BODY
    HEADERS
*/