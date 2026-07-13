import Router from "express";
import { userController,authMiddleware } from "../../../../../container/users/user.container";

const router = Router();

//Post Method
router.post('/',authMiddleware.handle.bind(authMiddleware),userController.create.bind(userController));

export default router;