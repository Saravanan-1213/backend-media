import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import { verify } from "jsonwebtoken";

const router = express.Router();

// READ
router.get("/", verifyToken, getFeedPosts); // homepage all posts
router.get("/:userId/posts", verifyToken, getUserPosts); // particular user posts only

// UPDATE

router.patch("/:id/:like", verifyToken, likePost); // like and dislike

export default router;
