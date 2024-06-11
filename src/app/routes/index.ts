import express from "express";
import { test } from "../modules/test/test.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/test",
    routes: test,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
