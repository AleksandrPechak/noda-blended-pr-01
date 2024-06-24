import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { createPoductController, deleteProductController, getProductsController } from "../controllers/products.js";
const router = Router();

router.get("/", ctrlWrapper(getProductsController));

router.post("/", ctrlWrapper(createPoductController));

router.delete("/:prouctId", ctrlWrapper(deleteProductController));

export default router;