import express from "express";

import * as middleware from "../middlewares/urls.middleware.js";
import * as controller from "../controllers/urls.controller.js";
const router = express.Router();

router.post("/urls/shorten", middleware.verifyConnection, middleware.verifyUrl, controller.createShorten);
router.get("/urls/:id", controller.getShortenById);
router.get("/urls/open/:shortUrl", controller.openShorten);

export default router;