import { Router } from "express";
import { inventoryContainer,authMiddleWare } from "../../../../../container/inventory/inventory.container";

const router = Router();

//Post Method
router.post('/',inventoryContainer.create.bind(inventoryContainer));

export default router;