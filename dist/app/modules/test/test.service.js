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
exports.getTest = exports.addTest = void 0;
const test_model_1 = require("./test.model");
const addTest = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield test_model_1.Test.create(data);
    return result;
});
exports.addTest = addTest;
const getTest = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield test_model_1.Test.find();
    return result;
});
exports.getTest = getTest;
