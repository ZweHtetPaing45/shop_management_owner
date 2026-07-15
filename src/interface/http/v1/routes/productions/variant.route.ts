import {Router} from "express";
import {productionVariantContainer} from "../../../../../container/productions/variant.container";
import {authMiddleWare} from "../../../../../container/productions/variant.container";

const router = Router();

//Post Method
router.post('/',productionVariantContainer.create.bind(productionVariantContainer));

export default router;