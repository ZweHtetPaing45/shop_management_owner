import { Router } from "express";
import shopRouter from "../shop/shop.route";
import authRouter from "../owner/owner.route";
import userRouter from "../employees/employees.route";
import inventoryRouter from '../inventory/inventory.route';
import prductionVariantRouter from '../productions/variant.route';
import Production from '../productions/production.route';

const router = Router();

router.use("/auth",authRouter);
router.use('/shops',shopRouter);
router.use('/users',userRouter);
router.use('/inventory',inventoryRouter);
router.use('/productions/variant',prductionVariantRouter);
router.use('/productions',Production);

export default router;