"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_route_1 = require("../modules/test/test.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/test",
        routes: test_route_1.test,
    },
];
moduleRoutes.forEach((route) => {
    router.use(route.path, route.routes);
});
exports.default = router;
