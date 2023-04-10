import express from "express";

import { insertReview } from "../controllers/ReviewController.js";
import { getDataFasyankes, getListNakesbyCodeFaskes } from "../controllers/SisdmkController.js";
import { changePassword, getDataUser, insertDataUser, login, logout } from "../controllers/UsersController.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.post("/reviewtpmd/v1/login", login);
router.post("/reviewtpmd/v1/review/submit", verifyToken, insertReview);

router.get("/reviewtpmd/v1/nakes", verifyToken, getListNakesbyCodeFaskes);
router.get("/reviewtpmd/v1/fasyankes", verifyToken, getDataFasyankes);
export default router;
