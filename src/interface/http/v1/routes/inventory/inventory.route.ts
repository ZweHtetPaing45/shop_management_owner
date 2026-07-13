import { Router } from "express";
import { inventoryController,authMiddleWare } from "../../../../../container/inventory/inventory.container";

const router = Router();

//Post Method
router.post('/',authMiddleWare.handle.bind(authMiddleWare),inventoryController.create.bind(inventoryController));

export default router;