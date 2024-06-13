import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { createProductsController, deleteProductController, getProductsController } from "../controllers/products.js";
const router = Router();

router.get("/", ctrlWrapper(getProductsController));

router.post("/", ctrlWrapper(createProductsController));

router.delete("/:prouctId", ctrlWrapper(deleteProductController));

export default router;