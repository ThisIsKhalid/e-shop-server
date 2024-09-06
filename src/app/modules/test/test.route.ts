import express from "express";
import { addTestCont, getTestCont } from "./test.controller";
import uploadMiddleware from "../../middleware/uploadMiddleware";

const router = express.Router();

const upload = uploadMiddleware("fashionBazar");

router.post("/add", upload.single("image"), addTestCont);

router.get("/", getTestCont);

export const test = router;
