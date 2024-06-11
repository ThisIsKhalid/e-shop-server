import express from "express";
import { addTestCont, getTestCont } from "./test.controller";

const router = express.Router();

router.post("/add", addTestCont);

router.get("/", getTestCont);

export const test = router;
