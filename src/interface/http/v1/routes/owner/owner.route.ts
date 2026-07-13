import Router from "express";
import { ownerController } from "../../../../../container/owner/auth.container";

const router = Router();


router.post('/register', ownerController.create.bind(ownerController));
router.post('/login', ownerController.login.bind(ownerController));

export default router;