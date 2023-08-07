import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriends,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ

router.get("/id", verifyToken, getUser);
router.get("/:id/getUserFriends", verifyToken, getUserFriends);

// UPDATE

// here we using update because of addRemoveFriends . for this we not use get  we use PATCH
router.patch("/:id/:friendId", verifyToken, addRemoveFriends);

export default router;
