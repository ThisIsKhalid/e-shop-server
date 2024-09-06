"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const express_1 = __importDefault(require("express"));
const test_controller_1 = require("./test.controller");
const uploadMiddleware_1 = __importDefault(require("../../middleware/uploadMiddleware"));
const router = express_1.default.Router();
const upload = (0, uploadMiddleware_1.default)("fashionBazar");
router.post("/add", upload.single("image"), test_controller_1.addTestCont);
router.get("/", test_controller_1.getTestCont);
exports.test = router;
