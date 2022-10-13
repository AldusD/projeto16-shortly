import express from 'express';

import * as controller from '../controllers/auth.controller.js';
import * as middleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post("/signup", middleware.verifyNewUser, controller.registerUser);

export default router;