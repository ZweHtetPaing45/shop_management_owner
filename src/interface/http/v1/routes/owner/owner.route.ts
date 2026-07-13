import Router from "express";
import { ownerContainer } from "../../../../../container/owner/auth.container";

const router = Router();


router.post('/register', ownerContainer.create.bind(ownerContainer));
router.post('/login', ownerContainer.login.bind(ownerContainer));

export default router;