"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestCont = exports.addTestCont = void 0;
const test_service_1 = require("./test.service");
const addTestCont = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    // File upload successful
    const { email } = req.body;
    const fileUrl = req.file.path; // URL of the uploaded file in Cloudinary
    const data = {
        email,
        image: fileUrl,
    };
    const result = yield (0, test_service_1.addTest)(data);
    res.send({
        success: true,
        data: result,
    });
});
exports.addTestCont = addTestCont;
const getTestCont = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, test_service_1.getTest)();
    res.send({
        success: true,
        data: result,
    });
});
exports.getTestCont = getTestCont;
