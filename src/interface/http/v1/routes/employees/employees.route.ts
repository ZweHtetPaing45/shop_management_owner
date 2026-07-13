import Router from "express";
import { userContainer,authMiddleware } from "../../../../../container/users/user.container";

const router = Router();

//Post Method
router.post('/',authMiddleware.handle.bind(authMiddleware),userContainer.create.bind(userContainer));

export default router;