import { Router } from "express";
import { inventoryContainer,authMiddleWare } from "../../../../../container/inventory/inventory.container";

const router = Router();

//Post Method
router.post('/',authMiddleWare.handle.bind(authMiddleWare),inventoryContainer.create.bind(inventoryContainer));

export default router;