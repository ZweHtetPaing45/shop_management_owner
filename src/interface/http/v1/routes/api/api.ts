import { Router } from "express";
import shopRouter from "../shop/shop.route";
import authRouter from "../owner/owner.route";
import userRouter from "../employees/employees.route";
import inventoryRouter from '../inventory/inventory.route';

const router = Router();

router.use("/auth",authRouter);
router.use('/shops',shopRouter);
router.use('/users',userRouter);
router.use('/inventory',inventoryRouter);

export default router;