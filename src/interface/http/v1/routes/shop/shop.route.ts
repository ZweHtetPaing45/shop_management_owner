import { Router } from "express";
import { shopController } from "../../../../../container/shop/shop.container";
import { upload } from "../../middlewares/upload.middleware";

const router = Router();

router.post('/',upload.single('shop_image'),shopController.create.bind(shopController));

export default router;