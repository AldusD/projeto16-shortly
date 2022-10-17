import express from "express";

import * as controller  from "../controllers/ranking.controller.js";

const router = express.Router();

router.get("/ranking", controller.getRanking);

export default router;