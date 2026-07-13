import { Router } from "express";
import { shopContainer } from "../../../../../container/shop/shop.container";
import { upload } from "../../middlewares/upload.middleware";

const router = Router();

router.post('/',upload.single('shop_image'),shopContainer.create.bind(shopContainer));

export default router;