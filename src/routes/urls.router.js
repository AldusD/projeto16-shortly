import express from "express";

import * as middleware from "../middlewares/urls.middleware.js";

const router = express.Router();

router.post("/urls/shorten", middleware.verifyConnection, middleware.verifyUrl, (req, res) => {return res.status(501).send(res.locals.user)} );

export default router;