import express from "express";
import { createNewUser, signinUser } from "../Controllers/UserControllers.js";

const router = express.Router();

router.post("/create_user", createNewUser)
router.post("/signin_user", signinUser)






export default router;