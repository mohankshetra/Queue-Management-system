import express from "express";

import authMiddleware
from "../middleware/authMiddleware.js";

import roleMiddleware
from "../middleware/roleMiddleware.js";

import {
    generateToken,
    getAllTokens,
    callNextToken,
    completeToken
} from "../controllers/tokenController.js";

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    generateToken
);

router.get(
    "/",
    authMiddleware,
    getAllTokens
);

router.put(
    "/call-next",
    authMiddleware,
    roleMiddleware(
        "STAFF",
        "ADMIN"
    ),
    callNextToken
);

router.put(
    "/complete/:id",
    authMiddleware,
    roleMiddleware(
        "STAFF",
        "ADMIN"
    ),
    completeToken
);

export default router;