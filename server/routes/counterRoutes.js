import express from "express";

import authMiddleware
from "../middleware/authMiddleware.js";

import roleMiddleware
from "../middleware/roleMiddleware.js";

import {
    createCounter,
    getCounters,
    updateCounterStatus
} from "../controllers/counterController.js";

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    roleMiddleware("ADMIN"),
    createCounter
);

router.get(
    "/",
    authMiddleware,
    getCounters
);

router.put(
    "/:id",
    authMiddleware,
    roleMiddleware("ADMIN"),
    updateCounterStatus
);

export default router;