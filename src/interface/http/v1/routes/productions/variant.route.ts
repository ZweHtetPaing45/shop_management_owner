import {Router} from "express";
import {productionVariantContainer} from "../../../../../container/productions/variant.container";
import {authMiddleWare} from "../../../../../container/productions/variant.container";

const router = Router();

//Post Method
router.post('/',authMiddleWare.handle.bind(authMiddleWare),productionVariantContainer.create.bind(productionVariantContainer));

export default router;