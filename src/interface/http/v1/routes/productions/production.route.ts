import {Router} from 'express';
import { ProductionContainer } from '../../../../../container/productions/production.container';
import { upload } from "../../middlewares/upload.middleware";


const router = Router();

//Post Method
router.post('/',upload.single('production_image'),ProductionContainer.create.bind(ProductionContainer));

export default router;