import express from "express";

import * as middleware from '../middlewares/urls.middleware.js'; 
import * as controller from '../controllers/users.controller.js';

const router = express.Router();

router.get("/users/me", middleware.verifyConnection, controller.getsUserData);

export default router;