import express from 'express';
import { BookController } from '../controllers/bookController';

const router = express.Router();

router.get('/', BookController.getBook);
router.post('/', BookController.postBook);

export default router;
