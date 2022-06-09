import {Router} from 'express'
const router=Router();
import * as classController from './class.controller'

router.get('/class', classController.getClass);

router.get('/class/:id', classController.findClass);

router.post('/class', classController.createClass);

router.delete('/class/:id', classController.deleteClass);

router.put('/class/:id', classController.updateClass);

export default router